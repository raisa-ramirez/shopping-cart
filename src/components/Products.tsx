import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { ProductProps } from '../interface';
import Card from './Card';
import { orderByPrice } from '../redux/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  const fetchProducts = require('../redux/productSlice').fetchProducts;

  const addProduct = (item: ProductProps) => {
    let addedProduct = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1
    };
    dispatch(addItem(addedProduct));
  };

  const handleFilter = (order: string) => {
    dispatch(orderByPrice({ order: order }));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <select
        className="filter-select"
        onChange={(evt) => handleFilter(evt.target.value)}
      >
        <option value="desc">Highest to lowest price</option>
        <option value="asc">Lowest to highest price</option>
      </select>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 mb-8">
        {products.products.map((product: ProductProps) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            handleAdd={() => addProduct(product)}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
