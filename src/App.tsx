import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ShareCard from './pages/ShareCard';
import DocumentView from './pages/DocumentView';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/share" element={<ShareCard />} />
      <Route path="/document/:id" element={<DocumentView />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;