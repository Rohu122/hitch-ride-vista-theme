
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="hitchride-container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-hitchride-primary">Hitch</span> Ride
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/how-it-works" className="text-gray-600 hover:text-hitchride-primary font-medium uppercase transition-colors">
            How it works
          </Link>
          <Link to="/eco-points" className="text-gray-600 hover:text-hitchride-primary font-medium uppercase transition-colors">
            Eco points
          </Link>
          <Link to="/safety" className="text-gray-600 hover:text-hitchride-primary font-medium uppercase transition-colors">
            Safety
          </Link>
          <Link to="/live-map" className="text-gray-600 hover:text-hitchride-primary font-medium uppercase transition-colors">
            Live map
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Button className="rounded-full bg-yellow-400 text-hitchride-dark hover:bg-yellow-500 w-12 h-12 p-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </Button>
          <Button className="rounded-full bg-teal-500 text-white hover:bg-teal-600 w-12 h-12 p-0 flex items-center justify-center">
            <User className="h-6 w-6" />
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-4 pb-6 px-4 space-y-4 animate-fade-in">
          <Link to="/how-it-works" className="block py-2 text-gray-600 hover:text-hitchride-primary uppercase">
            How it works
          </Link>
          <Link to="/eco-points" className="block py-2 text-gray-600 hover:text-hitchride-primary uppercase">
            Eco points
          </Link>
          <Link to="/safety" className="block py-2 text-gray-600 hover:text-hitchride-primary uppercase">
            Safety
          </Link>
          <Link to="/live-map" className="block py-2 text-gray-600 hover:text-hitchride-primary uppercase">
            Live map
          </Link>
          <hr className="border-gray-200 my-4" />
          <div className="flex space-x-3">
            <Button className="rounded-full bg-yellow-400 text-hitchride-dark hover:bg-yellow-500 w-12 h-12 p-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </Button>
            <Button className="rounded-full bg-teal-500 text-white hover:bg-teal-600 w-12 h-12 p-0 flex items-center justify-center">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
