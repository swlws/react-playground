import { useEffect, useState, useSyncExternalStore } from 'react';

/** 强制刷新组件 */
export function useForceRender() {
  const [, setState] = useState(0);
  return setState;
}

/** Fetch Data */
export function useFetchData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      });

    return () => {
      ignore = true;
    };
  }, [url]);

  return data;
}

function onNetworkChange(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

/**
 * 获取网络状态
 *    使用  useSyncExternalStore 订阅外部 store
 * @returns
 */
export function useOnlineStatus() {
  // ✅ 非常好：用内置的 Hook 订阅外部 store
  return useSyncExternalStore(
    onNetworkChange, // 只要传递的是同一个函数，React 不会重新订阅
    () => navigator.onLine, // 如何在客户端获取值
    () => true // 如何在服务端获取值
  );
}
