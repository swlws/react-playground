// 方法
import { forwardRef, useImperativeHandle, useReducer, useRef } from 'react';
import { treeDataReducer } from './action/tree-data-reducer';
import { TreeDataContext, TreeDataDispatchContext } from './context/tree-data';
import {
  ValidatorResultContext,
  ValidatorResultDispatchContext,
} from './context/validator';
import { validateResultReducer } from './action/validator-reducer';

// 组件
import Tree from './tree/index';

// 变量
import { ENUM_TREE_DATA_OPERATION, ID_ROOT } from './constant';

// 样式
import './index.scss';

/**
 * 高级搜索上下文组件
 * @param {*} param0
 * @returns
 */
function AdvancedSearchContext({
  treeData,
  treeDataDispatch,
  validateResult,
  validateResultDispatch,
  children,
}) {
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

/**
 * 高级搜索组件
 * @param {*} props
 * @param {*} ref
 * @returns
 */
function AdvancedSearch(props, ref) {
  const domRef = useRef(null);
  const [treeData, treeDataDispatch] = useReducer(treeDataReducer, {});
  const [validateResult, validateResultDispatch] = useReducer(
    validateResultReducer,
    {}
  );

  useImperativeHandle(ref, () => ({
    el: domRef.current,
    setData: (data) => {
      treeDataDispatch({
        type: ENUM_TREE_DATA_OPERATION.SET_TREE_DATA,
        payload: data,
      });
    },
  }));

  return (
    <div ref={domRef} className="advanced-search">
      <AdvancedSearchContext
        treeData={treeData}
        treeDataDispatch={treeDataDispatch}
        validateResult={validateResult}
        validateResultDispatch={validateResultDispatch}
      >
        <label>Advance Search</label>
        {treeData && <Tree id={ID_ROOT} />}
      </AdvancedSearchContext>
    </div>
  );
}

export default forwardRef(AdvancedSearch);
