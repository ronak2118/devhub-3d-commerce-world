
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories, getProductsByCategory, Product } from "@/data/products";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { ArrowRight, Grid3X3 } from "lucide-react";

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();
  
  const categoryProducts = selectedCategory 
    ? getProductsByCategory(selectedCategory).slice(0, 4) 
    : [];

  return (
    <Layout>
      <div className="bg-devhub-soft-gray py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h1>
          <p className="text-gray-600 max-w-2xl">
            Browse our device categories to find the perfect smart home solution for your needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <div 
              key={category}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                selectedCategory === category ? 'ring-2 ring-devhub-purple' : ''
              }`}
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">{category}</h2>
                  <div className="w-10 h-10 bg-devhub-light-purple rounded-full flex items-center justify-center">
                    <Grid3X3 className="text-devhub-purple" size={20} />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {getProductsByCategory(category).length} products available
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{selectedCategory} Products</h2>
              <Link 
                to={`/products`}
                className="text-devhub-purple hover:text-devhub-dark-purple flex items-center text-sm font-medium"
              >
                View all {selectedCategory} products
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoriesPage;
