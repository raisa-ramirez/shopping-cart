import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByPrice } from '../redux/productSlice';
import { addItem } from '../redux/cartSlice';
import { ProductProps } from '../interface';
import Card from './Card';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);

  const addProduct = (item: ProductProps) => {
    let addedProduct = {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: 1
    };
    dispatch(addItem(addedProduct));
  };
  useEffect(() => {
    dispatch(orderByPrice());
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((product: ProductProps) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          handleAdd={() => addProduct(product)}
        />
      ))}
    </div>
  );
};

export default Products;
