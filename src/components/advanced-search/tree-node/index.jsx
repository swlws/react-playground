import { memo } from 'react';
import Tree from '../tree/index';

import {
  ENUM_TREE_DATA_OPERATION,
  ENUM_TREE_DATA_VALIDATE_ACTION,
  ENUM_VALIDATE_STATE,
  NAMESPACE,
} from '../constant';
import FormComponent from './form-component';
import { useTreeDataDispatch, useTreeNodeData } from '../context/tree-data';
import { useForceRender } from '../hooks';
import {
  useValidatorResult,
  useValidatorResultDispatch,
} from '../context/validator';
import { getFormData, getValidateRules } from './helper';

// 渲染行
function renderTreeNode({ data, validateResult, onValueChange }) {
  return (
    <div className={[`${NAMESPACE}__tree-node__row`]}>
      {data.map((item) => {
        const { id, componentType, value } = item;
        const { state: validateState, message: validateMessage } =
          validateResult[id] || {};
        return (
          <FormComponent
            key={id}
            componentType={componentType}
            value={value}
            validateState={validateState}
            validateMessage={validateMessage}
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

  const validateResult = useValidatorResult(nodeId) || {};
  const validateResultDispatch = useValidatorResultDispatch();

  console.log('validateResult', validateResult);

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
  };

  return (
    <div className={[`${NAMESPACE}__tree-node`]}>
      {renderTreeNode({ data, validateResult, onValueChange })}
      {renderTree(treeList)}
    </div>
  );
}

export default memo(TreeNode);
