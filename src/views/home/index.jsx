import { useEffect, useRef } from 'react';
import AdvancedSearch from '../../components/advanced-search';
import {
  schema,
  // treeData,
  flatTreeData,
  defaultRow,
} from '../../components/advanced-search/data';

export default function HomePage() {
  const advancedSearchRef = useRef(null);

  useEffect(() => {
    console.log(advancedSearchRef.current);

    advancedSearchRef.current.setData(flatTreeData);
  }, []);

  return (
    <>
      <section>
        <AdvancedSearch
          ref={advancedSearchRef}
          schema={schema}
          defaultRow={defaultRow}
        />
      </section>
    </>
  );
}
