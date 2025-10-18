import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/ui-theme.css';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import store from './store/toolkit/index.js';
import { Provider } from 'react-redux';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
