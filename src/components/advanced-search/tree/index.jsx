import TreeNode from '../tree-node/index';

import { NAMESPACE } from '../constant';

export default function Tree(props) {
  const { title = '', list = [] } = props;

  const renderTreeNodeList = (list) => {
    return list.map((item, index) => {
      const { id, data, state, treeData } = item;
      return (
        <TreeNode
          key={index}
          id={id}
          data={data}
          state={state}
          treeData={treeData}
        />
      );
    });
  };

  return (
    <section className={`${NAMESPACE}__tree`}>
      <header>{title}</header>

      <main>{renderTreeNodeList(list)}</main>
    </section>
  );
}
