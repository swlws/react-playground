function getNodes() {
  return Array.from({ length: 10 }).map((_, i) => ({
    id: `id-${i}`,
    combo: 'combo1', // 🔹 把几个节点放进 combo1
    data: { category: i === 0 ? 'central' : 'around' },
  }));
}

function getEdges() {
  return Array.from({ length: 9 }).map((_, i) => ({
    source: `id-0`,
    target: `id-${i + 1}`,
  }));
}

function getCombos() {
  return [
    {
      id: 'combo1',
      label: '组合1',
    },
  ];
}

export function getData() {
  return {
    nodes: getNodes(),
    edges: getEdges(),
    combos: getCombos(),
  };
}
