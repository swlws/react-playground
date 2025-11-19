export const getDataZoomInside = () => ({
  type: 'inside',
  // 影响的轴
  xAxisIndex: [0, 1, 2, 3],
  // ToDo: 动态控制，根据日、周、月、年维度和数据设置不同宽度
  start: 70,
  end: 100,
  minValueSpan: 90,
});

export const getDataZoomSlider = () => ({
  show: false,
  // 影响的轴
  xAxisIndex: [0, 1, 2, 3],
  type: 'slider',
  top: '90%',
  start: 0,
  end: 100,
  minValueSpan: 90,
  // maxValueSpan: 50,
  height: '48px',
  // 选中范围的填充颜色
  fillerColor: 'rgba(22, 93, 255, 0.2)',
  // 更换两侧缩放手柄的 icon 形状
  handleIcon:
    'path://M1.5,3.5L0,0L6,0L4.5,3.5L4.5,43.5L6,47L0,47L1.5,43.5L1.5,3.5Z',
  handleStyle: {
    color: '#006FFF',
  },
  // 边框
  borderColor: '#fff',
  dataBackground: {
    // 线条的样式 - 不生效
    lineStyle: {
      // color: 'red'
      color: '#338fff',
    },
    // 阴影的样式 - 不生效
    areaStyle: {
      // color: 'red'
      // color: 'linear-gradient(180deg, rgba(122, 162, 255, 0.41) 12%, rgba(255, 255, 255, 0) 135%);'
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 1,
            color: 'rgba(122, 162, 255, 0.41)', // 100% 处的颜色
          },
          {
            offset: 0,
            color: 'rgba(255, 255, 255, 0)', // 0% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
    },
  },
});
