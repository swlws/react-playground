// 方法
import { forwardRef, useImperativeHandle, useReducer, useRef } from 'react';
import { treeDataReducer } from './reducer/tree-data';
import { TreeDataContext, TreeDataDispatchContext } from './context/tree-data';

// 组件
import Tree from './tree/index';

// 变量
import { ENUM_TREE_DATA_OPERATION } from './constant';

// 样式
import './index.scss';

function AdvancedSearchContext({ treeData, dispatch, children }) {
  return (
    <TreeDataContext.Provider value={treeData}>
      <TreeDataDispatchContext.Provider value={dispatch}>
        {children}
      </TreeDataDispatchContext.Provider>
    </TreeDataContext.Provider>
  );
}

function AdvancedSearch(props, ref) {
  const domRef = useRef(null);
  const [treeData, dispatch] = useReducer(treeDataReducer, {});

  useImperativeHandle(ref, () => ({
    el: domRef.current,
    setData: (data) => {
      dispatch({
        type: ENUM_TREE_DATA_OPERATION.SET_TREE_DATA,
        payload: data,
      });
    },
  }));

  return (
    <div ref={domRef} className="advanced-search">
      <AdvancedSearchContext treeData={treeData} dispatch={dispatch}>
        <label>Advance Search</label>
        {treeData && (
          <Tree id={treeData.id} title={treeData.title} list={treeData.list} />
        )}
      </AdvancedSearchContext>
    </div>
  );
}

export default forwardRef(AdvancedSearch);
