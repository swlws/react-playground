import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

import Tree from './tree/index';

import './index.scss';
import { updateTargetComponentValue } from './helper/update-component-value';

function AdvancedSearch(props, ref) {
  const domRef = useRef(null);
  const [treeData, setTreeData] = useState({});

  useImperativeHandle(ref, () => ({
    el: domRef.current,
    setData: (data) => {
      setTreeData(data);
    },
  }));

  const onComponentValueChange = (rowId, componentId, value) => {
    const newTreeData = updateTargetComponentValue({
      treeData,
      rowId,
      componentId,
      value,
    });
    setTreeData(newTreeData);
  };

  return (
    <div className="advanced-search" ref={domRef}>
      <label>Advance Search</label>
      <Tree
        id={treeData.id}
        title={treeData.title}
        list={treeData.list}
        onComponentValueChange={onComponentValueChange}
      />
    </div>
  );
}

export default forwardRef(AdvancedSearch);
