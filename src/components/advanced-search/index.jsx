import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { updateTargetComponentValueWithImmer } from './business/tree-data';

import Tree from './tree/index';

import './index.scss';

function AdvancedSearch(props, ref) {
  const domRef = useRef(null);
  const [treeData, setTreeData] = useState({});

  useImperativeHandle(ref, () => ({
    el: domRef.current,
    setData: (data) => {
      setTreeData(data);
    },
  }));

  const onComponentValueChange = useCallback((rowId, componentId, value) => {
    setTreeData((prev) =>
      updateTargetComponentValueWithImmer({
        treeData: prev,
        rowId,
        componentId,
        value,
      })
    );
  }, []);

  return (
    <div className="advanced-search" ref={domRef}>
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
