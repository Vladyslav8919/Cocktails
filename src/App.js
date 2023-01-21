import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Layout from './pages/Layout';
// import components

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
