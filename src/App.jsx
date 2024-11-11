import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/shared/Dashboard';
import Products from './components/shared/Products';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="Products" element={<Products />} />
          </Route>
          <Route path="Login" element={<div>this is a login page</div> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

