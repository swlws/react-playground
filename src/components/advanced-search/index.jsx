// 方法
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useReducer,
  useRef,
} from 'react';
import { treeDataReducer } from './reducer/tree-data';

// 组件
import Tree from './tree/index';

// 变量
import { ENUM_TREE_DATA_OPERATION } from './constant';

// 样式
import './index.scss';

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

  const onComponentValueChange = useCallback((rowId, componentId, value) => {
    dispatch({
      type: ENUM_TREE_DATA_OPERATION.UPDATE_TARGET_COMPONENT_VALUE,
      payload: { rowId, componentId, value },
    });
  }, []);

  return (
    <div ref={domRef} className="advanced-search">
      <label>Advance Search</label>
      {treeData && (
        <Tree
          id={treeData.id}
          title={treeData.title}
          list={treeData.list}
          onComponentValueChange={onComponentValueChange}
        />
      )}
    </div>
  );
}

export default forwardRef(AdvancedSearch);
