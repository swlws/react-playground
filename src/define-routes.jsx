import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Home from './views/home/index';
// import Demo from './views/demo/index';

const Home = React.lazy(() => import('./views/home/index'));
const Demo = React.lazy(() => import('./views/demo/index'));
const Crypto = React.lazy(() => import('./views/crypto/index'));
const G6 = React.lazy(() => import('./views/G6/index'));
const FormEngine = React.lazy(() => import('./views/form-engine/index'));
const KChartViewer = React.lazy(() => import('./views/k-chart-viewer/index'));

export default function DefineRoutes() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/g6" element={<G6 />} />
        <Route path="/form-engine" element={<FormEngine />} />
        <Route path="/k-chart" element={<KChartViewer />} />
      </Routes>
    </Suspense>
  );
}
