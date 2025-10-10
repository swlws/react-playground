import { useCallback, useEffect, useRef, useState } from 'react';

let oldAddValueFn;
let oldCallbackRef;
export default function Demo() {
  console.log('Demo Render');

  const [value, setValue] = useState(1);
  const callbackRef = useRef(() => {});

  // 第一次 render 后，值为 true
  console.log('callbackRef === oldCallbackRef', oldCallbackRef === callbackRef);
  oldCallbackRef = callbackRef;

  const addValue = useCallback(() => {
    console.log('call addValue');
    setValue(value + 1);
    // setValue((pre) => pre + 1);
  }, [value]);

  // 因为 value 的变化，导致 addValue 会每次重新创建
  console.log('addValue === oldAddValueFn', oldAddValueFn === addValue);
  oldAddValueFn = addValue;

  useEffect(() => {
    console.log('🎯 useEffect run');
    return () => console.log('🧹 cleanup');
  }, []);

  return (
    <div>
      value: {value}
      <button onClick={addValue}>add value</button>
    </div>
  );
}

// addValue 的调优方案，使用 setValue。
// 二次渲染时，value 的引用变化；setValue 的引用不变
// const addValue = useCallback(() => {
//   console.log('call addValue');
//   setValue((pre) => pre + 1);
// }, []);
