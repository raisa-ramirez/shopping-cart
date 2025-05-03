import { CartItemsProps } from '../interface';

const CartItem = ({
  id,
  title,
  price,
  quantity,
  image,
  handleDelete,
  handleAddItem,
  handleRemoveItem
}: CartItemsProps) => (
  <div className="grid grid-cols-6 cart-items">
    <div>
      <img src={image} alt="Product" className="cart-image" />
    </div>

    <div className="col-span-5 grid grid-cols-1 md:grid-cols-2">
      <div>
        <h3 className="cart-title">{title}</h3>
        <h4 className="cart-subtitle">${price.toFixed(2)}</h4>
        <h4 className="cart-subtitle">{quantity} item(s)</h4>
      </div>

      <div className="h-full">
        <div className="cart-price">
          <p>${(price * quantity).toFixed(2)}</p>
        </div>
        <button className="cart-delete" onClick={() => handleDelete()}>
          Eliminar
        </button>
        <button className="cart-minus" onClick={() => handleRemoveItem()}>
          -
        </button>
        <button className="cart-plus" onClick={() => handleAddItem()}>
          +
        </button>
      </div>
    </div>
  </div>
);

export default CartItem;
