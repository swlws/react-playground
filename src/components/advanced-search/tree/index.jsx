import TreeNode from '../tree-node/index';

import { NAMESPACE } from '../constant';

export default function Tree(props) {
  const { title = '', list = [] } = props;

  const renderRows = (list) => {
    return list.map((item, index) => {
      const { row, state, treeData } = item;
      return (
        <TreeNode key={index} row={row} state={state} treeData={treeData} />
      );
    });
  };

  return (
    <section className={`${NAMESPACE}__tree`}>
      <header>{title}</header>

      <main>{renderRows(list)}</main>
    </section>
  );
}
