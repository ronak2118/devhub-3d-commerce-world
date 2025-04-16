
import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import SimpleModel3DViewer from "@/components/3d/SimpleModel3DViewer";

interface ProductCardProps {
  product: Product;
  showViewIn3D?: boolean;
}

const ProductCard = ({ product, showViewIn3D = true }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group relative">
      {/* Product Image or 3D Model */}
      <div className="relative aspect-square overflow-hidden bg-devhub-soft-gray">
        {showModel && showViewIn3D ? (
          <SimpleModel3DViewer 
            modelPath={product.modelPath} 
            height="100%" 
          />
        ) : (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        )}
        
        {/* 3D View button */}
        {showViewIn3D && (
          <button
            onClick={() => setShowModel(!showModel)}
            className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-devhub-purple hover:text-white transition-colors"
            aria-label={showModel ? "View Image" : "View in 3D"}
          >
            <Eye size={16} />
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="text-xs text-devhub-purple font-medium mb-1">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-2 hover:text-devhub-purple transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product, 1)}
            className="bg-devhub-purple hover:bg-devhub-dark-purple text-white p-2 rounded-full transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
