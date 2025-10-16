// 方法
import {
  forwardRef,
  useImperativeHandle,
  useReducer,
  useRef,
  memo,
} from "react";
import { treeDataReducer } from "./action/tree-data-reducer";
import { TreeDataContext, TreeDataDispatchContext } from "./context/tree-data";
import {
  ValidatorResultContext,
  ValidatorResultDispatchContext,
} from "./context/validator";
import { validateResultReducer } from "./action/validator-reducer";

// 组件
import Tree from "./tree/index";

// 变量
import { ENUM_TREE_DATA_OPERATION, ID_ROOT } from "./constant";

// 样式
import "./index.scss";

/**
 * 高级搜索上下文组件 - 使用memo优化渲染性能
 * @param {Object} props - 组件属性
 * @param {Object} props.treeData - 树形数据
 * @param {Function} props.treeDataDispatch - 树形数据dispatch函数
 * @param {Object} props.validateResult - 验证结果
 * @param {Function} props.validateResultDispatch - 验证结果dispatch函数
 * @param {React.ReactNode} props.children - 子组件
 * @returns {React.ReactElement} 上下文提供器组件
 */
const AdvancedSearchContext = memo(
  ({
    treeData,
    treeDataDispatch,
    validateResult,
    validateResultDispatch,
    children,
  }) => {
    return (
      <TreeDataContext.Provider value={treeData}>
        <TreeDataDispatchContext.Provider value={treeDataDispatch}>
          <ValidatorResultContext.Provider value={validateResult}>
            <ValidatorResultDispatchContext.Provider
              value={validateResultDispatch}
            >
              {children}
            </ValidatorResultDispatchContext.Provider>
          </ValidatorResultContext.Provider>
        </TreeDataDispatchContext.Provider>
      </TreeDataContext.Provider>
    );
  }
);

AdvancedSearchContext.displayName = "AdvancedSearchContext";

/**
 * 高级搜索组件
 * @param {Object} props - 组件属性
 * @param {React.Ref} ref - 引用对象
 * @returns {React.ReactElement} 高级搜索组件
 */
function AdvancedSearch(props, ref) {
  const domRef = useRef(null);
  const [treeData, treeDataDispatch] = useReducer(treeDataReducer, {});
  const [validateResult, validateResultDispatch] = useReducer(
    validateResultReducer,
    {}
  );

  // 使用useImperativeHandle暴露组件方法
  useImperativeHandle(
    ref,
    () => ({
      el: domRef.current,
      setData: (data) => {
        treeDataDispatch({
          type: ENUM_TREE_DATA_OPERATION.SET_TREE_DATA,
          payload: data,
        });
      },
      // 添加获取当前数据的方法
      getData: () => treeData,
      // 添加验证方法
      validate: () => {
        // 返回当前验证结果
        return Object.values(validateResult).every((result) => result === true);
      },
      // 重置数据
      reset: () => {
        treeDataDispatch({
          type: ENUM_TREE_DATA_OPERATION.SET_TREE_DATA,
          payload: {},
        });
      },
    }),
    [treeData, validateResult]
  );

  return (
    <div ref={domRef} className="advanced-search">
      <AdvancedSearchContext
        treeData={treeData}
        treeDataDispatch={treeDataDispatch}
        validateResult={validateResult}
        validateResultDispatch={validateResultDispatch}
      >
        <label>Advanced Search</label>
        {Object.keys(treeData).length > 0 && <Tree id={ID_ROOT} />}
      </AdvancedSearchContext>
    </div>
  );
}

export default forwardRef(AdvancedSearch);
