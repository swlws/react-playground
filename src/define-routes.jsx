import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import Home from './views/home/index';
// import Demo from './views/demo/index';

const Home = React.lazy(() => import("./views/home/index"));
const Demo = React.lazy(() => import("./views/demo/index"));
const G6 = React.lazy(() => import("./views/G6/index"));

export default function DefineRoutes() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/g6" element={<G6 />} />
      </Routes>
    </Suspense>
  );
}
