import { Graph } from '@antv/g6';
import { useCallback, useEffect, useRef } from 'react';
import { getOption } from './config';
import { toggleAllCombos } from './action/combo';

export default function G6Demo() {
  const containerRef = useRef(null);
  const graphRef = useRef(null);

  const toggleCombo1 = useCallback(() => {
    toggleAllCombos({ graph: graphRef.current });
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
      <button onClick={toggleCombo1}>切换所有 Combo 折叠状态</button>
      <div ref={containerRef} style={{ width: '100%', height: '500px' }} />
    </section>
  );
}
