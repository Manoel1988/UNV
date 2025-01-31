import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Cadastro from './pages/Cadastro';
    import Lista from './pages/Lista';
    import './index.css';

    const App = () => (
      <Router>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </Router>
    );

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
