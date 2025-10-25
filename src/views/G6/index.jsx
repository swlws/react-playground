import { Graph } from '@antv/g6';
import { useCallback, useEffect, useRef } from 'react';
import { getOption } from './config';
import { toggleAllCombos, addNodeEdge } from './action/index';
import { ENUM_NODE_SHAPE_TYPE } from './core/constants';

export default function G6Demo() {
  const containerRef = useRef(null);
  const graphRef = useRef(null);

  const toggleComboState = useCallback(() => {
    toggleAllCombos({ graph: graphRef.current });
  }, []);

  const handleAddOneNode = useCallback((type) => {
    addNodeEdge({ graph: graphRef.current, type });
  }, []);

  useEffect(() => {
    const config = getOption({ container: containerRef.current });
    const graph = new Graph(config);
    graph.render();

    graphRef.current = graph;
    window.__graphRef = graph;
  }, []);

  return (
    <section className="demo-g6">
      <button onClick={toggleComboState}>切换所有 Combo 折叠状态</button>
      <button
        onClick={() => handleAddOneNode(ENUM_NODE_SHAPE_TYPE.DUAL_LABEL_NODE)}
      >
        双标题节点
      </button>
      <button
        onClick={() => handleAddOneNode(ENUM_NODE_SHAPE_TYPE.USER_CARD_NODE)}
      >
        用户卡片节点
      </button>
      <div ref={containerRef} style={{ width: '100%', height: '500px' }} />
    </section>
  );
}
