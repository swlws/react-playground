import { Graph } from '@antv/g6';
import { useCallback, useEffect, useRef } from 'react';
import { getOption } from './config';
import { toggleAllCombos } from './action/combo';
import { addOneNode } from './action/node';
import { addOneEdge } from './action/edge';

export default function G6Demo() {
  const containerRef = useRef(null);
  const graphRef = useRef(null);

  const toggleComboState = useCallback(() => {
    toggleAllCombos({ graph: graphRef.current });
  }, []);

  const handleAddOneNode = useCallback(() => {
    const node = addOneNode({ graph: graphRef.current });
    addOneEdge({ graph: graphRef.current, source: 'id-1', target: node.id });
    graphRef.current.layout();
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
      <button onClick={handleAddOneNode}>添加一个节点</button>
      <div ref={containerRef} style={{ width: '100%', height: '500px' }} />
    </section>
  );
}
