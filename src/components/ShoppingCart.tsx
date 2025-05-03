import { useDispatch, useSelector } from 'react-redux';
import CarItem from './CartItem';
import { CartItemsProps } from '../interface';
import { removeAll, addItem, removeItem } from '../redux/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state: any) => state.cartItems);
  const dispatch = useDispatch();
  const deleteAll = (item: CartItemsProps) => {
    dispatch(removeAll(item));
  };
  const addItems = (item: CartItemsProps) => {
    dispatch(addItem(item));
  };
  const removeItems = (item: CartItemsProps) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="pb-12">
      <h1 className="cart-page">My Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item: CartItemsProps) => (
              <CarItem
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
                key={item.id}
                handleDelete={() => deleteAll(item)}
                handleAddItem={() => addItems(item)}
                handleRemoveItem={() => removeItems(item)}
              />
            ))
          ) : (
            <div className="cart-items text-center text-lg text-blue-950 h-40">
              <p className="pt-8">Your Shopping Cart Is</p>
              <h1 className="font-bold text-orange-500 text-xl">EMPTY</h1>
            </div>
          )}
        </div>

        <div className="p-4 border rounded-md bg-slate-50 text-gray-700 cart-items">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          {cartItems.map((item: CartItemsProps) => (
            <div key={item.id} className="flex justify-between mb-2">
              <div>
                {item.title} ({item.quantity})
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
          <div className="flex justify-between font-bold pt-4 border-t mt-4">
            <div className="text-gray-900 text-lg">Total</div>
            <div className="text-gray-900 text-lg">
              $
              {cartItems
                .reduce(
                  (acc: number, item: CartItemsProps) =>
                    acc + item.price * item.quantity,
                  0
                )
                .toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
