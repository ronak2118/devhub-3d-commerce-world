
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Layers, Shield, Wifi } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import Layout from "@/components/layout/Layout";
import SimpleModel3DViewer from "@/components/3d/SimpleModel3DViewer";

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section with 3D Model */}
      <section className="relative bg-gradient-to-br from-white to-devhub-light-purple min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`transition-opacity duration-700 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Smart IoT Devices for the{" "}
                <span className="bg-gradient-to-r from-devhub-purple to-devhub-dark-purple text-transparent bg-clip-text">
                  Modern Home
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Discover our revolutionary collection of IoT devices that transform how you interact with your living space.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="bg-devhub-purple hover:bg-devhub-dark-purple text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center"
                >
                  Explore Products
                  <ChevronRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors border border-gray-200"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className={`h-[400px] md:h-[500px] transition-opacity duration-1000 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <SimpleModel3DViewer modelPath="/models/smart-hub.glb" height="100%" />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
            fill="#ffffff"
          >
            <path d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,122.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              to="/products"
              className="text-devhub-purple hover:text-devhub-dark-purple flex items-center font-medium"
            >
              View All
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-devhub-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose DevHub?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our IoT devices are designed with the perfect blend of cutting-edge technology, usability, and aesthetic appeal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-devhub-light-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layers className="text-devhub-purple" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-4">Advanced Technology</h3>
              <p className="text-gray-600">
                Our devices feature the latest technology for optimal performance and compatibility with your existing smart home ecosystem.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-devhub-light-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-devhub-purple" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-4">Security First</h3>
              <p className="text-gray-600">
                End-to-end encryption and regular security updates ensure your data and home are protected at all times.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-devhub-light-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="text-devhub-purple" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                All DevHub products work together flawlessly, creating a unified system that simplifies your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-devhub-dark-purple to-devhub-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who have elevated their living spaces with DevHub IoT technology.
          </p>
          <Link
            to="/products"
            className="bg-white text-devhub-purple hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-colors inline-block"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
