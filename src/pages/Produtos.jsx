import { Link } from 'react-router-dom';

export const produtos = [
  { id: 1, nome: 'Notebook Gamer', preco: 'R$ 5.000' },
  { id: 2, nome: 'Mouse sem fio', preco: 'R$ 150' },
  { id: 3, nome: 'Teclado Mecânico', preco: 'R$ 350' },
];

export default function Produtos() {
  return (
    <div className="page-container">
      <h1>Nossos Produtos</h1>
      <ul className="product-list">
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link to={`/produtos/${produto.id}`}>{produto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
