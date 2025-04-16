
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import SimpleModel3DViewer from "@/components/3d/SimpleModel3DViewer";
import { ArrowLeft, ShoppingCart, Minus, Plus, ChevronRight } from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = id ? getProductById(id) : undefined;
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "specs">("overview");
  const [viewMode, setViewMode] = useState<"image" | "3d">("image");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you are looking for does not exist.</p>
          <Link 
            to="/products"
            className="bg-devhub-purple text-white px-6 py-2 rounded-full hover:bg-devhub-dark-purple transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Show a toast or feedback here
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-devhub-soft-gray py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-devhub-purple transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            <Link to="/products" className="text-gray-500 hover:text-devhub-purple transition-colors">Products</Link>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            <span className="text-gray-700 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-devhub-purple mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Media */}
          <div>
            {/* View Mode Selector */}
            <div className="flex mb-4 space-x-2">
              <button
                onClick={() => setViewMode("image")}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  viewMode === "image" 
                    ? "bg-devhub-purple text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors`}
              >
                View Images
              </button>
              <button
                onClick={() => setViewMode("3d")}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  viewMode === "3d" 
                    ? "bg-devhub-purple text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors`}
              >
                View in 3D
              </button>
            </div>
            
            {/* Main View */}
            <div className="bg-devhub-soft-gray rounded-xl overflow-hidden aspect-square mb-4">
              {viewMode === "3d" ? (
                <SimpleModel3DViewer 
                  modelPath={product.modelPath} 
                  height="100%" 
                  autoRotate={true} 
                />
              ) : (
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            
            {/* Thumbnails */}
            {viewMode === "image" && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer border-2 ${
                      activeImageIndex === index ? "border-devhub-purple" : "border-transparent"
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2 text-sm text-devhub-purple font-medium">
              {product.category}
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</div>
            
            <div className="mb-8">
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-2 font-medium text-sm border-b-2 ${
                    activeTab === "overview" ? "border-devhub-purple text-devhub-purple" : "border-transparent text-gray-500 hover:text-gray-700"
                  } transition-colors`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("features")}
                  className={`py-2 font-medium text-sm border-b-2 ${
                    activeTab === "features" ? "border-devhub-purple text-devhub-purple" : "border-transparent text-gray-500 hover:text-gray-700"
                  } transition-colors`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`py-2 font-medium text-sm border-b-2 ${
                    activeTab === "specs" ? "border-devhub-purple text-devhub-purple" : "border-transparent text-gray-500 hover:text-gray-700"
                  } transition-colors`}
                >
                  Specifications
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === "overview" && (
                <div>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              )}
              
              {activeTab === "features" && (
                <div>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-devhub-light-purple text-devhub-purple rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === "specs" && (
                <div>
                  <p className="text-gray-500 italic">Technical specifications will be available soon.</p>
                </div>
              )}
            </div>
            
            {/* Add to Cart */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-devhub-purple hover:bg-devhub-dark-purple text-white py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
            </div>
            
            {/* Shipping Info */}
            <div className="bg-devhub-soft-gray p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Free shipping</span> on orders over $50. 30-day return policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
