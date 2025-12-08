import React, { useState, useEffect } from 'react';
import { useAppContext } from '../Content/AppContext';
import ProductCard from '../Component/ProductCard';

const AllProducts = () => {
  const { product, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery && searchQuery.length > 0) {
      setFilteredProducts(
        product.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(product);
    }
  }, [product, searchQuery]);

  return (
    <div className='mt-16 flex flex-col'>
      {/* Header */}
      <div className='flex flex-col items-end w-max'>
        <p className='text-2xl font-medium uppercase'>All Products</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>

      {/* Product list */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {filteredProducts
          .filter((item) => item.inStock)
          .map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
