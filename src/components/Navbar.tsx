
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-hitchride-dark text-white py-4">
      <div className="hitchride-container flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-2xl font-bold">
            Hitch Ride
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/ride" className="hover:text-hitchride-primary transition-colors">
              Ride
            </Link>
            <Link to="/drive" className="hover:text-hitchride-primary transition-colors">
              Drive
            </Link>
            <Link to="/business" className="hover:text-hitchride-primary transition-colors">
              Business
            </Link>
            <div className="relative group">
              <button className="flex items-center hover:text-hitchride-primary transition-colors">
                About
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-white hover:text-hitchride-primary">
            <Globe className="h-5 w-5 mr-1" /> EN
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:text-hitchride-primary">
            Help
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:text-hitchride-primary">
            Log in
          </Button>
          <Button className="bg-white text-hitchride-dark hover:bg-gray-200">
            Sign up
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-hitchride-dark pt-4 pb-6 px-4 space-y-4 animate-fade-in">
          <Link to="/ride" className="block py-2 hover:text-hitchride-primary">
            Ride
          </Link>
          <Link to="/drive" className="block py-2 hover:text-hitchride-primary">
            Drive
          </Link>
          <Link to="/business" className="block py-2 hover:text-hitchride-primary">
            Business
          </Link>
          <Link to="/about" className="block py-2 hover:text-hitchride-primary">
            About
          </Link>
          <hr className="border-gray-700 my-4" />
          <div className="space-y-3">
            <Button variant="ghost" size="sm" className="text-white w-full justify-start">
              <Globe className="h-5 w-5 mr-2" /> EN
            </Button>
            <Button variant="ghost" size="sm" className="text-white w-full justify-start">
              Help
            </Button>
            <Button variant="ghost" size="sm" className="text-white w-full justify-start">
              Log in
            </Button>
            <Button className="bg-white text-hitchride-dark hover:bg-gray-200 w-full">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
