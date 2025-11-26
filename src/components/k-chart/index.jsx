import { useEffect, useRef, useState } from 'react';
import KChartCore from './core/index.js';
import { mockData } from './_mock/data.js';

export default function KChart() {
  const componentRef = useRef(null);
  const canvasRef = useRef(null);

  const [wh, setWh] = useState(() => ({ w: 500, h: 500 }));

  useEffect(() => {
    const { width, height } = componentRef.current.getBoundingClientRect();
    setWh({ w: width, h: height });

    const canvas = canvasRef.current;
    const kChartCore = new KChartCore({ dom: canvas, width, height });
    kChartCore.drawChart({ data: mockData() });

    componentRef.current.kChartCore = kChartCore;
  }, []);

  return (
    <article className="k-chart-container" ref={componentRef}>
      <div
        ref={canvasRef}
        style={{ width: `${wh.w}px`, height: `${wh.h}px` }}
      ></div>
    </article>
  );
}
