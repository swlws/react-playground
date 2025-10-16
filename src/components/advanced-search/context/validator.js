import {
  createContext,
  useContextSelector,
  useContext,
} from "use-context-selector";

/** 验证结果上下文 */
export const ValidatorResultContext = createContext(null);

/** 验证结果上下文提供器  */
export const useValidatorResult = (id) => {
  return (
    useContextSelector(ValidatorResultContext, (context) => context[id]) || {}
  );
};

/** 验证结果上下文操作器 */
export const ValidatorResultDispatchContext = createContext(null);

/** 使用验证结果上下文操作器 */
export const useValidatorResultDispatch = () => {
  return useContext(ValidatorResultDispatchContext);
};
