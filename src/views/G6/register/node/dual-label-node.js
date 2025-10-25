import { Rect } from '@antv/g6';

// 创建自定义节点，继承自 Rect
export default class DualLabelNode extends Rect {
  // 便捷的数据获取方法
  get nodeData() {
    return this.context.graph.getNodeData(this.id);
  }

  get data() {
    return this.nodeData.data || {};
  }

  // 副标题样式
  getSubtitleStyle(attributes) {
    return {
      x: 0,
      y: 45, // 放在主标题下方
      text: attributes.subtitle || '',
      fontSize: 12,
      fill: '#666',
      textAlign: 'center',
      textBaseline: 'middle',
    };
  }

  // 绘制副标题
  drawSubtitleShape(attributes, container) {
    const subtitleStyle = this.getSubtitleStyle(attributes);
    this.upsert('subtitle', 'text', subtitleStyle, container);
  }

  // 渲染方法
  render(attributes = this.parsedAttributes, container) {
    // 1. 渲染基础矩形和主标题
    super.render(attributes, container);

    // 2. 添加副标题
    this.drawSubtitleShape(attributes, container);
  }
}
