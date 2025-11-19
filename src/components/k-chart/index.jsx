import { useEffect, useRef } from 'react';
import KChartCore from './core/index.js';

export default function KChart() {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const chartInstance = new KChartCore({ dom: canvas });
    chartInstance.drawChart({});
    chartInstanceRef.current = chartInstance;
  }, []);

  return (
    <article>
      <div ref={canvasRef}>123</div>
    </article>
  );
}
