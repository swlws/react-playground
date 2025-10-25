import { ENUM_NODE_SHAPE_TYPE } from '../constants';

export function getNodeStyle() {
  return {
    size: (data) => {
      if (data.type === ENUM_NODE_SHAPE_TYPE.USER_CARD_NODE) return [120, 50];

      return 20;
    },
    // 主标题样式
    labelText: (data) => data.id,
    // 副标题样式
    subtitle: (data) => data.data.subtitle,
    labelFill: '#333',
    labelFontSize: 10,
    labelPosition: 'bottom',

    // ENUM_NODE_SHAPE_TYPE.USER_CARD_NODE 数据映射
    avatarUrl: (d) => d.data.avatar,
    username: (d) => d.data.name,
    userRole: (d) => d.data.role,
  };
}
