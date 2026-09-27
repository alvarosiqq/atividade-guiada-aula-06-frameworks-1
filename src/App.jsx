import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';
import Produtos from './pages/Produtos.jsx';
import ProdutoDetalhe from './pages/ProdutoDetalhe.jsx';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
      </Routes>
    </BrowserRouter>
  );
}
