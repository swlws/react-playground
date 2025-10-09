// 默认行
export const defaultRow = [
  { id: 'left@leftBracket', componentType: 'leftBracket', value: ['('] },
  { id: 'name@input', componentType: 'input', value: [''] },
  { id: 'right@rightBracket', componentType: 'rightBracket', value: [')'] },
];

export const schema = {
  'left@leftBracket': {
    componentType: 'leftBracket',
    value: ['('],
  },
  'name@input': {
    componentType: 'input',
    value: [''],
  },
  'right@rightBracket': {
    componentType: 'rightBracket',
    value: [')'],
  },
};

export const treeData = {
  title: '根组',
  id: 'gid-001',
  list: [
    {
      id: 'row-id-001',
      row: [
        { id: 'left@leftBracket', componentType: 'leftBracket', value: ['('] },
        { id: 'name@input', componentType: 'input', value: [''] },
        {
          id: 'right@rightBracket',
          componentType: 'rightBracket',
          value: [')'],
        },
      ],
      state: {},
      treeData: [
        {
          id: 'gid-002',
          title: '内嵌组',
          list: [
            {
              id: 'row-id-001-001',
              row: [
                {
                  id: 'left@leftBracket',
                  componentType: 'leftBracket',
                  value: ['('],
                },
                { id: 'name@input', componentType: 'input', value: [''] },
                {
                  id: 'right@rightBracket',
                  componentType: 'rightBracket',
                  value: [')'],
                },
              ],
              state: {},
              groupList: [],
            },
            {
              id: 'row-id-001-002',
              row: [
                {
                  id: 'left@leftBracket',
                  componentType: 'leftBracket',
                  value: ['('],
                },
                { id: 'name@input', componentType: 'input', value: [''] },
                {
                  id: 'right@rightBracket',
                  componentType: 'rightBracket',
                  value: [')'],
                },
              ],
              state: {},
            },
          ],
        },
      ],
    },
    {
      id: 'row-id-002',
      row: [
        { id: 'left@leftBracket', componentType: 'leftBracket', value: ['('] },
        { id: 'name@input', componentType: 'input', value: [''] },
        {
          id: 'right@rightBracket',
          componentType: 'rightBracket',
          value: [')'],
        },
      ],
      state: {},
    },
  ],
};
