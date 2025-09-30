import Tree from '../tree/index';

import { NAMESPACE } from '../constant';

export default function TreeNode(props) {
  const { row, treeData = [] } = props;

  // 渲染行
  const renderRow = (row) => {
    return <div>组件个数 {row.length}</div>;
  };

  // 渲染树结构
  const renderTree = (treeData) => {
    return (
      <div className={[`${NAMESPACE}__tree-node__children`]}>
        {treeData.map((item, index) => {
          const { title, list } = item;
          return <Tree key={index} title={title} list={list} />;
        })}
      </div>
    );
  };

  return (
    <div className={[`${NAMESPACE}__tree-node`]}>
      {renderRow(row)}
      {renderTree(treeData)}
    </div>
  );
}
