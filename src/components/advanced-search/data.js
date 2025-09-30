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
  list: [
    {
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
          title: '内嵌组',
          list: [
            {
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
