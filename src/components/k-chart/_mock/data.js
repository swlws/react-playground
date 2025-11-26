export function mockData() {
  // 生成 09:30~11:30 和 13:00~15:00 的所有时间点
  function genTradingTimes() {
    const times = [];
    const day = new Date();

    function pushRange(startH, startM, endH, endM) {
      const start = new Date(day);
      start.setHours(startH, startM, 0, 0);

      const end = new Date(day);
      end.setHours(endH, endM, 0, 0);

      const cur = new Date(start);

      while (cur <= end) {
        times.push(new Date(cur));
        cur.setMinutes(cur.getMinutes() + 1); // 间隔 1 分钟
      }
    }

    // 上午
    pushRange(9, 30, 11, 30);
    // 下午
    pushRange(13, 0, 15, 0);

    return times;
  }

  const times = genTradingTimes();

  // 随机生成 K 线数据
  const list = times.map((t) => {
    const open = rand();
    const close = rand();
    const high = Math.max(open, close) + rand(0, 20);
    const low = Math.min(open, close) - rand(0, 20);

    return {
      time: t,
      open: Math.max(open, 0),
      high: Math.max(high, 0),
      low: Math.max(low, 0),
      close: Math.max(close, 0),
      volume: rand(50, 500),
    };
  });

  return list;
}

// 工具函数：生成随机数
function rand(min = 10, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
