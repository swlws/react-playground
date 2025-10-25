import { ENUM_LAYOUT_TYPE } from './core/constants';
import { getBehavior } from './core/behaviors';
import { getLayout } from './core/layout';
import { getCombo } from './core/combo';
import { getEdge } from './core/edge';
import { getNode } from './core/node';
import { getPlugins } from './core/plugins';
import { getData } from './data';

export function getOption({ container }) {
  return {
    container,
    devicePixelRatio: window.devicePixelRatio,
    data: getData(),
    node: getNode(),
    edge: getEdge(),
    combo: getCombo(),
    layout: getLayout({ type: ENUM_LAYOUT_TYPE.ANTV_DAGRE }),
    behaviors: getBehavior(),
    plugins: getPlugins(),
  };
}
