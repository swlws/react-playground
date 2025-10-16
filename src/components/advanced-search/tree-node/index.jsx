import { memo } from 'react';
import Tree from '../tree/index';

import {
  ENUM_TREE_DATA_OPERATION,
  ENUM_TREE_DATA_VALIDATE_ACTION,
  NAMESPACE,
} from '../constant';
import FormComponent from './form-component';
import { useTreeDataDispatch, useTreeNodeData } from '../context/tree-data';
import { useForceRender } from '../hooks';
import { useValidatorResultDispatch } from '../context/validator';
import { getFormData, getValidateRules } from './helper';

// 渲染行
function renderTreeNode(data, onValueChange) {
  return (
    <div className={[`${NAMESPACE}__tree-node__row`]}>
      {data.map((item) => {
        const { id, componentType, value } = item;
        return (
          <FormComponent
            key={id}
            componentType={componentType}
            value={value}
            onChange={(newValue) => {
              onValueChange(item.id, newValue, value);
            }}
          />
        );
      })}
    </div>
  );
}

// 渲染树结构
const renderTree = (treeList) => {
  return (
    <div className={[`${NAMESPACE}__tree-node__children`]}>
      {treeList.map((treeId) => {
        return <Tree key={treeId} id={treeId} />;
      })}
    </div>
  );
};

function TreeNode({ id: nodeId }) {
  console.log('TreeNode Render ID: ', nodeId);
  const forceRender = useForceRender();

  const { data = [], treeList = [] } = useTreeNodeData(nodeId) || {};
  const treeDataDispatch = useTreeDataDispatch();
  const validateResultDispatch = useValidatorResultDispatch();

  const onValueChange = (componentId, value, oldValue) => {
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
          console.log(errors);
        },
      },
    });
  };

  return (
    <div className={[`${NAMESPACE}__tree-node`]}>
      {renderTreeNode(data, onValueChange)}
      {renderTree(treeList)}
    </div>
  );
}

export default memo(TreeNode);
