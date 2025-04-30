import { CartItemsProps } from '../interface';

const CartItem = ({ id, title, price, quantity }: CartItemsProps) => (
  <div className="grid grid-cols-6 cart-items">
    <div>
      <img src="/product.png" alt="Product" className="cart-image" />
    </div>

    <div className="col-span-5 grid grid-cols-1 md:grid-cols-2">
      <div>
        <h3 className="cart-title">{title}</h3>
        <h4 className="cart-subtitle">${price}</h4>
        <h4 className="cart-subtitle">{quantity} item(s)</h4>
      </div>

      <div className="h-full">
        <div className="cart-price">
          <p>${price * quantity}</p>
        </div>
        <div className="cart-delete">Eliminar</div>
      </div>
    </div>
  </div>
);

export default CartItem;
