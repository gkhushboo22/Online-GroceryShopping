import React from 'react';
import { useAppContext } from '../Content/AppContext';
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from '../Component/ProductCard';

const ProductsCategory = () => {
  const { product } = useAppContext();
  const { category } = useParams();

  // find matching category data
  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );

  // filter products that belong to this category
  const filteredProducts = product.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="mt-16 flex flex-col">
      {/* Heading */}
      {searchCategory && (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full"></div>
        </div>
      )}

      {/* Products grid */}
      <div className="">
          {filteredProducts.length > 0 ? (
           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>{filteredProducts.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
          </div>
        ) : (
          <div className='flex items-center justify-center h-[60vh]'>
            <p className="text-primary text-center col-span-full">
            No products found in this category.
          </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsCategory;
