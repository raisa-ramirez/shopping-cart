import Card from './Card';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Mouse inalambrico logitech mx anywhere 3s ',
      price: 99.95
    },
    {
      id: 2,
      title: 'Mouse inalambrico logitech pro x superlight 2',
      price: 159.95
    },
    {
      id: 3,
      title: 'Mouse inalambrico logitech semipro x superlight 2',
      price: 100.95
    },
    {
      id: 4,
      title: 'Mouse inalambrico bluetooth logitech signature m650',
      price: 39.95
    },
    {
      id: 5,
      title: 'Mouse inalambrico bluetooth logitech signature m650',
      price: 39.95
    },
    {
      id: 6,
      title: 'Mouse inalambrico bluetooth logitech signature m650',
      price: 39.95
    },
    {
      id: 7,
      title: 'Mouse inalambrico bluetooth logitech signature m650',
      price: 39.95
    }
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pl-14 pr-14 pt-24">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
