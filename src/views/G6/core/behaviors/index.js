export function getBehavior() {
  return [
    'drag-canvas',
    'zoom-canvas',
    'drag-element',
    {
      type: 'collapse-expand-combo',
      // trigger: "dblclick", // ✅ 支持双击折叠
      // animate: true,
    },
  ];
}
