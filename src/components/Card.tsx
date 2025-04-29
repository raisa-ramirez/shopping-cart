import { ProductProps } from '../interface';

const Card = ({ id, title, price }: ProductProps) => (
  <div className="product-card">
    <img
      src={'/product.png'}
      alt={`Product ${id}`}
      className="object-contain mx-auto pb-6 drop-shadow-md"
    />
    <p className="product-title">{title}</p>
    <p className="product-price">
      <span className="text-red-800">$ </span>
      {price}
    </p>
  </div>
);
export default Card;
