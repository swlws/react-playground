/**
 * 模拟用户信息获取
 * @returns
 */
export function apiFetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: '张三',
        email: '<EMAIL>',
      });
    }, 1000);
  });
}
