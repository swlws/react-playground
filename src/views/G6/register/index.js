import { register, ExtensionCategory } from '@antv/g6';
import DualLabelNode from './node/dual-label-node';
import { ENUM_NODE_SHAPE_TYPE } from '../core/constants';
import UserCardNode from './node/user-card-node';

register(
  ExtensionCategory.NODE,
  ENUM_NODE_SHAPE_TYPE.DUAL_LABEL_NODE,
  DualLabelNode
);

register(
  ExtensionCategory.NODE,
  ENUM_NODE_SHAPE_TYPE.USER_CARD_NODE,
  UserCardNode
);
