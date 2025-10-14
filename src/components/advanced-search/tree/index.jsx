import { memo } from 'react';
import TreeNode from '../tree-node/index';

import { NAMESPACE } from '../constant';
import { useTreeNodeData } from '../context/tree-data';

function Tree(props) {
  const { id } = props;
  console.log('Tree Render ID: ', id);
  const { title = '', nodeList = [] } = useTreeNodeData(id) || {};

  const renderTreeNodeList = (nodeList) => {
    return nodeList.map((nodeId) => {
      return <TreeNode key={nodeId} id={nodeId} />;
    });
  };

  return (
    <section className={`${NAMESPACE}__tree`}>
      <header>{title}</header>

      <main>{renderTreeNodeList(nodeList)}</main>
    </section>
  );
}

export default memo(Tree);
