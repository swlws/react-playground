import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

function AdvancedSearch(props, ref) {
  const domRef = useRef(null);
  const [name, setName] = useState('');

  useImperativeHandle(ref, () => ({
    el: domRef.current,
    setActiveFieldGroup: () => {
      setName('xxx');
    },
  }));

  return (
    <div ref={domRef}>
      <label>Advance Search</label>
      <input value={name} />
    </div>
  );
}

export default forwardRef(AdvancedSearch);
