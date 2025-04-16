
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { useCart } from "@/context/CartContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentForm from "@/components/checkout/PaymentForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { Steps } from "@/components/ui/steps";
import { toast } from "sonner";

const CheckoutPage = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("delivery");
  const [deliveryInfo, setDeliveryInfo] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  // Redirect to cart page if cart is empty
  if (items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const handleDeliveryInfoSubmit = (data: any) => {
    setDeliveryInfo(data);
    setActiveTab("payment");
    setCurrentStep(1);
  };

  const handlePaymentSubmit = () => {
    setCurrentStep(2);
    toast.success("Order placed successfully!");
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        
        <Steps 
          currentStep={currentStep}
          steps={[
            { label: "Delivery Information" },
            { label: "Payment" },
            { label: "Confirmation" }
          ]}
          className="mb-8"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger 
                  value="delivery" 
                  className="flex-1"
                  disabled={currentStep > 0}
                >
                  Delivery Information
                </TabsTrigger>
                <TabsTrigger 
                  value="payment" 
                  className="flex-1"
                  disabled={!deliveryInfo || currentStep > 1}
                >
                  Payment
                </TabsTrigger>
                <TabsTrigger 
                  value="confirmation" 
                  className="flex-1"
                  disabled={currentStep < 2}
                >
                  Confirmation
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="delivery" className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <CheckoutForm onSubmit={handleDeliveryInfoSubmit} />
              </TabsContent>
              
              <TabsContent value="payment" className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                {deliveryInfo && (
                  <PaymentForm onSubmit={handlePaymentSubmit} amount={getTotalPrice() * 1.08} />
                )}
              </TabsContent>
              
              <TabsContent value="confirmation" className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your order has been placed and will be processed shortly.
                  </p>
                  <p className="text-gray-600">
                    A confirmation email has been sent to: <span className="font-medium">{deliveryInfo?.email}</span>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
