import './App.css';
import DefineRoutes from './define-routes';
import { Link } from 'react-router-dom';
import { selectToken, setToken } from './store/toolkit/features/sessionSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const token = useSelector(selectToken);
  const storeDispatch = useDispatch();

  useEffect(() => {
    const token = (Math.random() * 1000) | 0;
    storeDispatch(setToken(token));
  }, []);

  return (
    <article className="app-main ui-theme">
      <nav className="app-nav">
        <div>ID:{token}</div>
        <Link to="/">Home</Link>
        <Link to="/demo">Demo</Link>
      </nav>

      <main className="app-content">
        <DefineRoutes />
      </main>
    </article>
  );
}

export default App;
