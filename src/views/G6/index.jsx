import { Graph } from "@antv/g6";
import { useCallback, useEffect, useRef } from "react";

let num = 0;
export default function G6Demo() {
  const containerRef = useRef(null);
  const graphRef = useRef(null);

  const toggleCombo1 = useCallback(() => {
    console.log(num, num % 2);
    if (num % 2 === 0) {
      graphRef.current.collapseElement("combo1");
    } else {
      graphRef.current.expandElement("combo1");
    }
    num++;
  }, []);

  useEffect(() => {
    graphRef.current = new Graph({
      container: containerRef.current,
      devicePixelRatio: window.devicePixelRatio,
      data: {
        nodes: Array.from({ length: 10 }).map((_, i) => ({
          id: `id-${i}`,
          data: { category: i === 0 ? "central" : "around" },
          combo: i === 6 ? "combo1" : null,
        })),
        edges: Array.from({ length: 9 }).map((_, i) => ({
          source: `id-0`,
          target: `id-${i + 1}`,
        })),
        combos: [{ id: "combo1" }],
      },
      node: {
        type: (datum) => (datum.id === "id-0" ? "circle" : "rect"),
        style: {
          size: (datum) => (datum.id === "id-1" ? 20 : [20, 20]),
          labelText: (d) => d.id, // ✅ label 内容
          labelFill: "#333",
          labelFontSize: 10,
          labelPosition: "bottom",
        },
        palette: {
          field: "category",
          color: ["#5B8FF9", "#5AD8A6", "#5D7092"],
        },
      },
      edge: {
        style: {
          stroke: "lightgreen",
        },
      },
      combo: {
        type: "rect", // Combo 外形
        style: {
          fill: "#f0f7ff",
          stroke: "#5B8FF9",
        },
        labelText: (d) => d.label,
        labelFill: "#333",
      },
      layout: {
        type: "d3-force",
        // 斥力强度（负数为排斥）
        manyBody: { strength: -200 },
        // ✅ 添加碰撞检测，避免节点重叠
        collision: { radius: 60 }, // radius 建议略大于节点半径
      },

      behaviors: [
        "drag-canvas",
        "zoom-canvas",
        "drag-element",
        {
          type: "collapse-expand-combo",
          trigger: "dblclick", // 默认是单击 click，可改为双击
          animate: true, // 折叠/展开时是否动画过渡
        },
      ],
      plugins: [
        { type: "grid-line", follow: true },
        {
          type: "minimap",
          size: [100, 100],
        },
        "contextmenu",
      ],
    });

    graphRef.current.render();
    window.__graphRef = graphRef.current;
  }, []);

  return (
    <section className="demo-g6">
      <button onClick={toggleCombo1}>切换折叠</button>
      <div ref={containerRef} style={{ width: "100%", height: "500px" }} />
    </section>
  );
}
