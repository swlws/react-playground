// 方法
import { memo, useCallback, useMemo } from "react";
import {
  ENUM_TREE_DATA_OPERATION,
  ENUM_TREE_DATA_VALIDATE_ACTION,
  NAMESPACE,
} from "@as/constant";
import { useTreeDataDispatch, useTreeNodeData } from "@as/context/tree-data";
import { useForceRender } from "@as/hooks";
import {
  useValidatorResult,
  useValidatorResultDispatch,
} from "@as/context/validator";
import { getFormData, getValidateRules } from "./helper";

// 组件
import Tree from "@as/tree/index";
import FormComponent from "./form-component";

/**
 * 渲染表单行组件
 * @param {Object} props - 组件属性
 * @param {Array} props.data - 行数据
 * @param {Object} props.validateResult - 验证结果
 * @param {Function} props.onValueChange - 值变更回调
 * @returns {React.ReactElement} 表单行组件
 */
const TreeNodeRow = memo(({ data, validateResult, onValueChange }) => {
  const rowClassName = useMemo(() => `${NAMESPACE}__tree-node__row`, []);

  return (
    <div className={rowClassName}>
      {data.map((item) => {
        const { id, componentType, value } = item;
        const { state: validateState, message: validateMessage } =
          validateResult[`${id}.0`] || {};

        return (
          <FormComponent
            key={id}
            componentType={componentType}
            value={value}
            validateState={validateState}
            validateMessage={validateMessage}
            onChange={(newValue) => {
              onValueChange(item.id, newValue, item.value);
            }}
          />
        );
      })}
    </div>
  );
});

/**
 * 渲染子树结构组件
 * @param {Object} props - 组件属性
 * @param {Array} props.treeList - 子树ID列表
 * @returns {React.ReactElement} 子树容器组件
 */
const TreeChildren = memo(({ treeList }) => {
  const childrenClassName = useMemo(
    () => `${NAMESPACE}__tree-node__children`,
    []
  );

  return (
    <div className={childrenClassName}>
      {treeList.map((treeId) => (
        <Tree key={treeId} id={treeId} />
      ))}
    </div>
  );
});

TreeChildren.displayName = "TreeChildren";

/**
 * 树节点组件
 * @param {Object} props - 组件属性
 * @param {string} props.id - 节点ID
 * @returns {React.ReactElement} 树节点组件
 */
function TreeNode({ id: nodeId }) {
  console.log("TreeNode Render ID: ", nodeId);
  const forceRender = useForceRender();

  const { data = [], treeList = [] } = useTreeNodeData(nodeId) || {};
  const treeDataDispatch = useTreeDataDispatch();

  const validateResult = useValidatorResult(nodeId);
  const validateResultDispatch = useValidatorResultDispatch();

  // 使用useCallback优化值变更处理函数
  const onValueChange = useCallback(
    (componentId, value, oldValue) => {
      // 更新数据
      treeDataDispatch({
        type: ENUM_TREE_DATA_OPERATION.UPDATE_TARGET_COMPONENT_VALUE,
        payload: { nodeId, componentId, value, oldValue },
      });

      // 更新 UI
      forceRender();

      // 校验
      validateResultDispatch({
        type: ENUM_TREE_DATA_VALIDATE_ACTION.EMIT_VALIDATE_COMPONENT_VALUE,
        payload: {
          formData: Object.assign(getFormData({ nodeData: data }), {
            [componentId]: value,
          }),
          rules: getValidateRules({ nodeData: data }),
          callback: (errors) => {
            validateResultDispatch({
              type: ENUM_TREE_DATA_VALIDATE_ACTION.SET_COMPONENT_VALIDATE_RESULT,
              payload: {
                nodeId,
                errors,
              },
            });
          },
        },
      });
    },
    [nodeId, data, treeDataDispatch, validateResultDispatch, forceRender]
  );

  // 使用useMemo优化类名和渲染内容
  const nodeClassName = useMemo(() => `${NAMESPACE}__tree-node`, []);

  // 使用useMemo缓存TreeNodeRow组件
  const treeNodeRowContent = useMemo(() => {
    return data.length > 0 ? (
      <TreeNodeRow
        data={data}
        validateResult={validateResult}
        onValueChange={onValueChange}
      />
    ) : null;
  }, [data, validateResult, onValueChange]);

  // 使用useMemo缓存TreeChildren组件
  const treeChildrenContent = useMemo(() => {
    return treeList.length > 0 ? <TreeChildren treeList={treeList} /> : null;
  }, [treeList]);

  return (
    <div className={nodeClassName}>
      {treeNodeRowContent}
      {treeChildrenContent}
    </div>
  );
}

export default memo(TreeNode);
