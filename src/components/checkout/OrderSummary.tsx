
import { useCart } from "@/context/CartContext";
import { PackageOpen } from "lucide-react";

const OrderSummary = () => {
  const { items, getTotalPrice } = useCart();
  
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden sticky top-24">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold">Order Summary</h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-4 mb-6">
          {items.map((item) => (
            <div key={item.product.id} className="flex">
              <div className="mr-4 bg-gray-100 rounded-md w-16 h-16 flex-shrink-0 overflow-hidden">
                {item.product.images && item.product.images.length > 0 ? (
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <PackageOpen size={24} className="text-gray-400" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium">{item.product.name}</p>
                  <p className="font-medium">${item.product.price.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <p>Qty: {item.quantity}</p>
                  <p>{item.product.company}</p>
                </div>
                {item.product.discount && (
                  <p className="text-xs text-green-600 mt-1">
                    {item.product.discount}% discount applied
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-100 pt-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          
          <div className="flex justify-between font-medium text-lg pt-2 border-t border-gray-100">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
