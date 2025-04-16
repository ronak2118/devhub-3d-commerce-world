
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-devhub-purple to-devhub-light-purple text-transparent bg-clip-text">
                DevHub
              </span>
            </Link>
            <p className="text-sm mb-4">
              Transforming spaces through advanced IoT technology. Connect, control, and create the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-devhub-purple transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-devhub-purple transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-devhub-purple transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-devhub-purple transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-devhub-purple transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/categories/smart-home" className="hover:text-devhub-purple transition-colors">Smart Home</Link>
              </li>
              <li>
                <Link to="/categories/security" className="hover:text-devhub-purple transition-colors">Security</Link>
              </li>
              <li>
                <Link to="/categories/sensors" className="hover:text-devhub-purple transition-colors">Sensors</Link>
              </li>
              <li>
                <Link to="/categories/connectivity" className="hover:text-devhub-purple transition-colors">Connectivity</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-devhub-purple transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-devhub-purple transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-devhub-purple transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-devhub-purple transition-colors">Press</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-devhub-purple transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="hover:text-devhub-purple transition-colors">Help Center</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-devhub-purple transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-devhub-purple transition-colors">Shipping</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-devhub-purple transition-colors">Returns</Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-devhub-purple transition-colors">Warranty</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} DevHub. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-devhub-purple transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-devhub-purple transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-devhub-purple transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
