
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center mb-6">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              to="/products"
              className="bg-devhub-purple hover:bg-devhub-dark-purple text-white px-6 py-3 rounded-full transition-colors inline-flex items-center font-medium"
            >
              Continue Shopping
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold">
                    Cart Items ({getTotalItems()})
                  </h2>
                </div>

                <div>
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-6 flex flex-col sm:flex-row items-center gap-6 border-b border-gray-100 last:border-b-0"
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-devhub-soft-gray rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-grow">
                        <Link
                          to={`/product/${item.product.id}`}
                          className="font-medium hover:text-devhub-purple transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.product.category}
                        </div>
                        <div className="text-devhub-purple font-semibold mt-2">
                          ${item.product.price.toFixed(2)}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-4 py-2 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Subtotal & Remove */}
                      <div className="flex flex-col items-end gap-2">
                        <div className="font-semibold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax:</span>
                    <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout" className="w-full">
                  <button className="w-full bg-devhub-purple hover:bg-devhub-dark-purple text-white py-3 px-4 rounded-full font-medium transition-colors mb-4">
                    Proceed to Checkout
                  </button>
                </Link>

                <Link
                  to="/products"
                  className="flex items-center justify-center text-devhub-purple hover:text-devhub-dark-purple font-medium text-sm"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
