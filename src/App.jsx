import './App.css';
import DefineRoutes from './define-routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <article className="app-main">
      <nav className="app-nav">
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
