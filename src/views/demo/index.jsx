import { useCallback, useEffect, useRef, useState } from "react";
import WithErrorBoundary from "../../components/with-error-boundary";

let oldAddValueFn;
let oldCallbackRef;
function Demo() {
  console.log("Demo Render");

  // if (Math.random() > 0.5) {
  //   throw new Error('error');
  // }

  const [value, setValue] = useState(1);
  const callbackRef = useRef(() => {});
  const buttonRef = useRef(null);

  // 第一次 render 后，值为 true
  console.log("callbackRef === oldCallbackRef", oldCallbackRef === callbackRef);
  oldCallbackRef = callbackRef;

  const addValue = useCallback(() => {
    console.log("call addValue");
    setValue(value * 2);
    setValue(value * 3);
  }, [value]);

  // 因为 value 的变化，导致 addValue 会每次重新创建
  console.log("addValue === oldAddValueFn", oldAddValueFn === addValue);
  oldAddValueFn = addValue;

  useEffect(() => {
    console.log("🎯 useEffect run");

    const log = () => {
      console.log("navtive call addValue ");
    };
    buttonRef.current?.addEventListener("click", log);
    return () => {
      buttonRef.current?.removeEventListener("click", log);
      console.log("🧹 cleanup");
    };
  }, []);

  return (
    <div>
      value: {value}
      <button ref={buttonRef} onClick={addValue}>
        add value
      </button>
    </div>
  );
}

const SafeComponent = WithErrorBoundary(Demo, (error, reset) => (
  <div>
    <p style={{ color: "red" }}>组件出错: {error.message}</p>
    <button onClick={reset}>重试</button>
  </div>
));

export default SafeComponent;

// addValue 的调优方案，使用 setValue。
// 二次渲染时，value 的引用变化；setValue 的引用不变
// const addValue = useCallback(() => {
//   console.log('call addValue');
//   setValue((pre) => pre + 1);
// }, []);
