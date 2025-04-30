import { ProductProps } from '../interface';

const Card = ({ id, title, price }: ProductProps) => (
  <div className="product-card h-full">
    <img
      src={'/product.png'}
      alt={`Product ${id}`}
      className="object-contain mx-auto pb-6 drop-shadow-md product-image"
    />
    <p className="product-title">{title}</p>
    <p className="product-price">
      <span className="text-gray-800">$ </span>
      {price}
    </p>
    <div className="product-button">Add to cart</div>
  </div>
);
export default Card;
