
import { useState } from "react";
import { products, getAllCategories } from "@/data/products";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { Filter, SlidersHorizontal } from "lucide-react";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = getAllCategories();
  
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <Layout>
      <div className="bg-devhub-soft-gray py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Products</h1>
          <p className="text-gray-600 max-w-2xl">
            Browse our collection of innovative IoT devices designed to transform your home into a connected, intelligent environment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="w-full md:w-64 hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-medium text-lg">Filters</h2>
                <Filter size={18} className="text-gray-500" />
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer px-3 py-2 rounded-md flex items-center ${selectedCategory === null ? 'bg-devhub-light-purple text-devhub-purple' : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    <span className="text-sm">All Categories</span>
                  </div>
                  
                  {categories.map(category => (
                    <div 
                      key={category}
                      className={`cursor-pointer px-3 py-2 rounded-md flex items-center ${selectedCategory === category ? 'bg-devhub-light-purple text-devhub-purple' : 'hover:bg-gray-100'}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className="text-sm">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters Button */}
          <div className="md:hidden mb-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-white py-3 px-4 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            {/* Mobile Filters */}
            {showFilters && (
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-2">
                <h3 className="text-sm font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer px-3 py-2 rounded-md flex items-center ${selectedCategory === null ? 'bg-devhub-light-purple text-devhub-purple' : 'hover:bg-gray-100'}`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    <span className="text-sm">All Categories</span>
                  </div>
                  
                  {categories.map(category => (
                    <div 
                      key={category}
                      className={`cursor-pointer px-3 py-2 rounded-md flex items-center ${selectedCategory === category ? 'bg-devhub-light-purple text-devhub-purple' : 'hover:bg-gray-100'}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span className="text-sm">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No products found</h3>
                <p className="text-gray-500 mt-2">Try changing your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
