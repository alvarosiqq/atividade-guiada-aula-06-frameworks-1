import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/sobre">Sobre</Link>
      <Link className="nav-link" to="/contato">Contato</Link>
      <Link className="nav-link" to="/produtos">Produtos</Link>
    </nav>
  );
}
