export function getNodeStyle() {
  return {
    size: 20,
    // 主标题样式
    labelText: (data) => data.id,
    // 副标题样式
    subtitle: (data) => data.data.subtitle,
    labelFill: '#333',
    labelFontSize: 10,
    labelPosition: 'bottom',
  };
}
