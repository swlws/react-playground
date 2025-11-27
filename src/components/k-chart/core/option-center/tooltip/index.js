export function getTooltipConfig() {
  return {
    show: true,
    trigger: 'axis',
    className: 'k-chart-tooltip',
    backgroundColor: 'rgba(238, 243, 255, 0.9)',
    borderColor: '#B4C9FC',
    padding: [4, 8],
    // tooltip 层级，防止被弹框覆盖
    extraCssText: 'z-index: 1000;',
    appendToBody: false, // 将 tooltip 移动到 body
    // 是否将 tooltip 框限制在图表的区域内。
    confine: true,
    formatter: (valueList) => {
      console.log(valueList);
      return '<div>123</div>';
    },
  };
}
