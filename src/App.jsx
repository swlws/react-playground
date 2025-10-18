import './App.css';
import DefineRoutes from './define-routes';
import { Link } from 'react-router-dom';
import { selectToken, setToken } from './store/toolkit/features/sessionSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUser,
  selectUserInfo,
  selectUserLoading,
} from './store/toolkit/features/userSlice';

function App() {
  const storeDispatch = useDispatch();
  const token = useSelector(selectToken);
  const userInfo = useSelector(selectUserInfo);
  const userLoading = useSelector(selectUserLoading);

  useEffect(() => {
    const token = (Math.random() * 1000) | 0;
    storeDispatch(setToken(token));

    storeDispatch(fetchUser());
  }, []);

  return (
    <article className="app-main ui-theme">
      <nav className="app-nav">
        <div>ID:{token}</div>
        <div>{userLoading ? '...' : userInfo.name}</div>
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
