import Tree from '../tree/index';

import { NAMESPACE } from '../constant';
import FormComponent from './form-component';

// 渲染行
function renderRow(data, onValueChange) {
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
const renderTree = (treeData, onComponentValueChange) => {
  return (
    <div className={[`${NAMESPACE}__tree-node__children`]}>
      {treeData.map((item) => {
        const { id, title, list } = item;
        return (
          <Tree
            key={id}
            title={title}
            list={list}
            onComponentValueChange={onComponentValueChange}
          />
        );
      })}
    </div>
  );
};

export default function TreeNode(props) {
  const { id, data, treeData = [], onComponentValueChange } = props;

  const onValueChange = (componentId, value) => {
    onComponentValueChange(id, componentId, value);
  };

  return (
    <div className={[`${NAMESPACE}__tree-node`]}>
      {renderRow(data, onValueChange)}
      {renderTree(treeData, onComponentValueChange)}
    </div>
  );
}
