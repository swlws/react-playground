import { useEffect, useRef } from "react";
import KChartCore from "./core/index.js";

export default function KChart() {
  const componentRef = useRef(null);
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const kChartCore = new KChartCore({ dom: canvas });
    kChartCore.drawChart({});
    chartInstanceRef.current = kChartCore;
    componentRef.current.__kChartCore = kChartCore;
  }, []);

  return (
    <article ref={componentRef}>
      <div style={{ width: "500px", height: "500px" }} ref={canvasRef}></div>
    </article>
  );
}
