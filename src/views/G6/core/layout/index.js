export const ENUM_LAYOUT_TYPE = {
  DEFAULT: 'DEFAULT',
  FLOW: 'FLOW',
  ANTV_DAGRE: 'antv-dagre',
};

const LAYOUT_MAP = {
  [ENUM_LAYOUT_TYPE.DEFAULT]: {
    type: 'd3-force',
    manyBody: { strength: -200 },
    collision: { radius: 60 },
  },
  [ENUM_LAYOUT_TYPE.FLOW]: {
    type: 'flow',
    nodesep: 50,
    ranksep: 50,
    controlPoints: true,
  },
  [ENUM_LAYOUT_TYPE.ANTV_DAGRE]: {
    type: 'antv-dagre',
    rankdir: 'TB',
    align: 'UL',
    nodesep: 50,
  },
};

export function getLayout({ type = ENUM_LAYOUT_TYPE.DEFAULT }) {
  return LAYOUT_MAP[type] || LAYOUT_MAP[ENUM_LAYOUT_TYPE.DEFAULT];
}
