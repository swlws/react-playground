import { Rect } from '@antv/g6';

export default class UserCardNode extends Rect {
  get nodeData() {
    return this.context.graph.getNodeData(this.id);
  }

  get data() {
    return this.nodeData.data || {};
  }

  // 头像样式
  getAvatarStyle(attributes) {
    const [width, height] = this.getSize(attributes);
    return {
      x: -width / 2 + 20,
      y: -height / 2 + 15,
      width: 30,
      height: 30,
      src: attributes.avatarUrl || '',
      radius: 15, // 圆形头像
    };
  }

  drawAvatarShape(attributes, container) {
    if (!attributes.avatarUrl) return;

    const avatarStyle = this.getAvatarStyle(attributes);
    this.upsert('avatar', 'image', avatarStyle, container);
  }

  // 状态徽章样式
  getBadgeStyle(attributes) {
    const [width, height] = this.getSize(attributes);
    const status = this.data.status || 'offline';
    const colorMap = {
      online: '#52c41a',
      busy: '#faad14',
      offline: '#8c8c8c',
    };

    return {
      x: width / 2 - 8,
      y: -height / 2 + 8,
      r: 4,
      fill: colorMap[status],
      stroke: '#fff',
      lineWidth: 2,
    };
  }

  drawBadgeShape(attributes, container) {
    const badgeStyle = this.getBadgeStyle(attributes);
    this.upsert('badge', 'circle', badgeStyle, container);
  }

  // 用户名样式
  getUsernameStyle(attributes) {
    const [width, height] = this.getSize(attributes);
    return {
      x: -width / 2 + 55,
      y: -height / 2 + 20,
      text: attributes.username || '',
      fontSize: 14,
      fill: '#262626',
      fontWeight: 'bold',
      textAlign: 'left',
      textBaseline: 'middle',
    };
  }

  drawUsernameShape(attributes, container) {
    if (!attributes.username) return;

    const usernameStyle = this.getUsernameStyle(attributes);
    this.upsert('username', 'text', usernameStyle, container);
  }

  // 角色标签样式
  getRoleStyle(attributes) {
    const [width, height] = this.getSize(attributes);
    return {
      x: -width / 2 + 55,
      y: -height / 2 + 35,
      text: attributes.userRole || '',
      fontSize: 11,
      fill: '#8c8c8c',
      textAlign: 'left',
      textBaseline: 'middle',
    };
  }

  drawRoleShape(attributes, container) {
    if (!attributes.userRole) return;

    const roleStyle = this.getRoleStyle(attributes);
    this.upsert('role', 'text', roleStyle, container);
  }

  render(attributes, container) {
    // 渲染基础矩形
    super.render(attributes, container);

    // 添加各个组件
    this.drawAvatarShape(attributes, container);
    this.drawBadgeShape(attributes, container);
    this.drawUsernameShape(attributes, container);
    this.drawRoleShape(attributes, container);
  }
}
