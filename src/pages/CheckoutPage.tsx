
import Layout from "@/components/layout/Layout";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { useCart } from "@/context/CartContext";
import { Navigate } from "react-router-dom";

const CheckoutPage = () => {
  const { items } = useCart();
  
  // Redirect to cart page if cart is empty
  if (items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <CheckoutForm />
      </div>
    </Layout>
  );
};

export default CheckoutPage;
