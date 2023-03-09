import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import FrontPage from './pages/FrontPage';
import Branch from './pages/Branch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="1GlostrupGruppeForside" element={<FrontPage />} />
        <Route path="/Gren" element={<Branch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

