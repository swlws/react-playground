import { useEffect, useRef } from 'react';
import AdvancedSearch from '../../components/advanced-search';

export default function HomePage() {
  const advancedSearchRef = useRef(null);

  useEffect(() => {
    // advancedSearchRef.current.setActiveFieldGroup();
    console.log(advancedSearchRef.current);
  }, []);

  return (
    <>
      <h1>Home</h1>
      <section>
        <AdvancedSearch ref={advancedSearchRef} />
      </section>
    </>
  );
}
