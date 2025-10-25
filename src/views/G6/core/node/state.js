export const ENUM_STATE_TYPE = {
  HIGHLIGHT: 'highlight',
};

export function getNodeState() {
  return {
    [ENUM_STATE_TYPE.HIGHLIGHT]: {
      stroke: 'red',
      lineWidth: 2,
    },
  };
}
