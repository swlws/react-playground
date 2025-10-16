import { memo, useCallback, useMemo } from "react";
import TreeNode from "../tree-node/index";

import { NAMESPACE } from "../constant";
import { useTreeNodeData } from "../context/tree-data";

/**
 * Tree组件 - 渲染树形结构
 * @param {Object} props - 组件属性
 * @param {string} props.id - 树节点ID
 * @returns {React.ReactElement} 树形组件
 */
function Tree(props) {
  const { id } = props;
  // 移除不必要的console日志，提高性能
  const { title = "", nodeList = [] } = useTreeNodeData(id) || {};

  // 使用useCallback优化渲染函数
  const renderTreeNodeList = useCallback((nodes) => {
    return nodes.map((nodeId) => <TreeNode key={nodeId} id={nodeId} />);
  }, []);

  // 使用useMemo缓存节点列表渲染结果
  const nodeListContent = useMemo(() => {
    return renderTreeNodeList(nodeList);
  }, [nodeList, renderTreeNodeList]);

  // 使用useMemo优化className计算
  const sectionClassName = useMemo(() => `${NAMESPACE}__tree`, []);

  return (
    <section className={sectionClassName}>
      {title && (
        <header className={`${sectionClassName}-header`}>{title}</header>
      )}
      {nodeList.length > 0 && (
        <main className={`${sectionClassName}-content`}>{nodeListContent}</main>
      )}
    </section>
  );
}

// 添加displayName以便于调试
Tree.displayName = "AdvancedSearchTree";

export default memo(Tree);
