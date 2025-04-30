import CarItem from './CartItem';
const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      title: 'Mouse inalambrico logitech mx anywhere 3s ',
      price: 99.95,
      quantity: 1
    },
    {
      id: 2,
      title: 'Mouse inalambrico logitech pro x superlight 2',
      price: 159.95,
      quantity: 1
    },
    {
      id: 3,
      title: 'Mouse inalambrico logitech semipro x superlight 2',
      price: 100.95,
      quantity: 1
    },
    {
      id: 4,
      title: 'Mouse inalambrico bluetooth logitech signature m650',
      price: 39.95,
      quantity: 1
    }
  ];

  return (
    <div className="pb-12">
      <h1 className="cart-page">My Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CarItem
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              key={item.id}
            />
          ))}
        </div>

        <div className="p-4 border rounded-md bg-slate-50 text-gray-700 cart-items">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          {cartItems.map((item) => (
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
                .reduce((acc, item) => acc + item.price * 1, 0)
                .toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
