import { memo } from 'react';
import Tree from '../tree/index';

import { ENUM_TREE_DATA_OPERATION, NAMESPACE } from '../constant';
import FormComponent from './form-component';
import { useTreeDataDispatch, useTreeNodeData } from '../context/tree-data';

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
            onChange={(value) => {
              onValueChange(item.id, value);
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
  const { data = [], treeList = [] } = useTreeNodeData(nodeId) || {};
  const treeDataDispatch = useTreeDataDispatch();

  const onValueChange = (componentId, value) => {
    treeDataDispatch({
      type: ENUM_TREE_DATA_OPERATION.UPDATE_TARGET_COMPONENT_VALUE,
      payload: { nodeId, componentId, value },
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
