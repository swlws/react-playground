import { register, ExtensionCategory } from '@antv/g6';
import DualLabelNode from './node/dual-label-node';
import { ENUM_NODE_SHAPE_TYPE } from '../core/constants';

register(
  ExtensionCategory.NODE,
  ENUM_NODE_SHAPE_TYPE.DUAL_LABEL_NODE,
  DualLabelNode
);
