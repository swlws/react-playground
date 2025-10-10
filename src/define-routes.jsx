import { Routes, Route } from 'react-router-dom';

import Home from './views/home/index';
import Demo from './views/demo/index';

export default function DefineRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
}
