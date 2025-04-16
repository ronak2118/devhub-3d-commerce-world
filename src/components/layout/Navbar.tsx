
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-devhub-purple to-devhub-dark-purple text-transparent bg-clip-text">
            DevHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-devhub-purple transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-700 hover:text-devhub-purple transition-colors"
          >
            Products
          </Link>
          <Link
            to="/categories"
            className="text-gray-700 hover:text-devhub-purple transition-colors"
          >
            Categories
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-devhub-purple transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <Link
            to="/cart"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={20} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 bg-devhub-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-devhub-purple transition-colors px-2 py-1"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-devhub-purple transition-colors px-2 py-1"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 hover:text-devhub-purple transition-colors px-2 py-1"
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-devhub-purple transition-colors px-2 py-1"
              onClick={toggleMenu}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
