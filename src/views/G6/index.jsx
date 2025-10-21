import { Graph } from "@antv/g6";
import { useCallback, useEffect, useRef } from "react";

export default function G6Demo() {
  const containerRef = useRef(null);
  const graphRef = useRef(null);
  const numRef = useRef(0);

  // 🔹 切换 combo1 的折叠/展开状态
  const toggleCombo1 = useCallback(() => {
    const graph = graphRef.current;
    if (!graph) return;

    const comboId = "combo1";
    const combo = graph.getComboData(comboId);

    // 🔸 检查当前状态（G6 v5 会自动记录 collapsed 状态）
    const isCollapsed = combo?.collapsed;

    if (isCollapsed) {
      graph.expandElement(comboId);
    } else {
      graph.collapseElement(comboId);
    }
    numRef.current++;
  }, []);

  useEffect(() => {
    const graph = new Graph({
      container: containerRef.current,
      devicePixelRatio: window.devicePixelRatio,
      data: {
        nodes: Array.from({ length: 10 }).map((_, i) => ({
          id: `id-${i}`,
          combo: "combo1", // 🔹 把几个节点放进 combo1
          data: { category: i === 0 ? "central" : "around" },
        })),
        edges: Array.from({ length: 9 }).map((_, i) => ({
          source: `id-0`,
          target: `id-${i + 1}`,
        })),
        combos: [
          {
            id: "combo1",
            label: "组合1",
          },
        ],
      },
      node: {
        type: (datum) => (datum.id === "id-0" ? "circle" : "rect"),
        style: {
          size: 20,
          labelText: (d) => d.id,
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
        type: "rect",
        style: {
          fill: "#f0f7ff",
          stroke: "#5B8FF9",
          radius: 8,
        },
        labelText: (d) => d.label,
        labelFill: "#333",
      },
      layout: {
        type: "d3-force",
        manyBody: { strength: -200 },
        collision: { radius: 60 },
      },
      behaviors: [
        "drag-canvas",
        "zoom-canvas",
        "drag-element",
        {
          type: "collapse-expand-combo",
          trigger: "dblclick", // ✅ 支持双击折叠
          animate: true,
        },
      ],
      plugins: [
        { type: "grid-line", follow: true },
        { type: "minimap", size: [120, 100] },
      ],
    });

    graph.render();
    graphRef.current = graph;
    window.__graphRef = graph;
  }, []);

  return (
    <section className="demo-g6">
      <button onClick={toggleCombo1}>切换 Combo1 折叠状态</button>
      <div ref={containerRef} style={{ width: "100%", height: "500px" }} />
    </section>
  );
}
