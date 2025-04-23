import { ProductProps } from '../interface';

const Card = ({ id, title, price }: ProductProps) => (
  <div className="bg-zinc-300 rounded-xl p-5">
    <img
      src={'/product.png'}
      alt={`Product ${id}`}
      className="object-contain mx-auto pb-6 drop-shadow-md"
    />
    <p className="font-semibold text-center text-base pb-3 mr-3 ml-3">
      {title}
    </p>
    <p className="text-center text-xl font-bold">
      <span className="text-red-800">$ </span>
      {price}
    </p>
  </div>
);
export default Card;
