/** X 轴的坐标指示器 */
const getXAxisPointer = () => {
  return {
    lineStyle: {
      type: 'dashed',
      width: 1,
      color: '#338fff',
    },
    label: {
      // 文字颜色
      color: '#006FFF',
      // 边框
      borderWidth: '1',
      borderColor: '#006FFF',
      // 刻度的内边距
      padding: [3, 8, 0, 4],
      borderRadius: 4,
      shadowColor: 'transparent',
      // 刻度的高度
      lineHeight: 13,
      fontSize: 12,
      formatter({ value }) {
        // let weekNum = WEEK_NAME_MAP[moment(value).day()] || ''
        // return value ? value + ' ' + weekNum : ''
        // return moment(value).format('HH:mm');
        return value;
      },
    },
  };
};

export const getXAxis = ({ gridIndex, data }) => {
  return {
    type: 'category',
    gridIndex,
    boundaryGap: true,
    data,
    min: 'dataMin',
    max: 'dataMax',
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false },
    axisPointer: getXAxisPointer(),
  };
};
