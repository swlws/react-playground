import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

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

  return (
    <div className="advanced-search" ref={domRef}>
      <label>Advance Search</label>
      <Tree title={treeData.title} list={treeData.list} />
    </div>
  );
}

export default forwardRef(AdvancedSearch);
