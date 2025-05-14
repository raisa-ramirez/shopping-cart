import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { ProductProps } from '../interface';
import Card from './Card';
import { orderByPrice } from '../redux/productSlice';
import { motion } from 'motion/react';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products);
  const fetchProducts = require('../redux/productSlice').fetchProducts;
  const [order, setOrder] = useState('');

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

  useEffect(() => {
    if (products.products.length === 0) {
      dispatch(fetchProducts());
    }
    // dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(orderByPrice({ order: order }));
  }, [order]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <>
      <select
        className="filter-select"
        onChange={(evt) => setOrder(evt.target.value)}
      >
        <option value="desc">Highest to lowest price</option>
        <option value="asc">Lowest to highest price</option>
      </select>

      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 mb-8"> */}
        {products.products.map((product: ProductProps, index: number) => (
          <motion.div
            key={product.id + order}
            layout
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              handleAdd={() => addProduct(product)}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Products;
