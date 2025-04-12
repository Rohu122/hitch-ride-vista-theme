
import React from 'react';
import { Link } from 'react-router-dom';

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link to="#" className="text-gray-600 hover:text-hitchride-primary transition-colors">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="hitchride-container">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-hitchride-dark">
              Hitch Ride
            </Link>
            <p className="mt-4 text-gray-600 max-w-xs">
              Ridesharing and delivery services that connect you to what matters.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <FooterColumn
              title="Company"
              links={["About us", "Our offerings", "Newsroom", "Investors", "Blog", "Careers", "AI"]}
            />
            
            <FooterColumn
              title="Products"
              links={["Ride", "Drive", "Deliver", "Eat", "Business", "Reserve", "Transit"]}
            />
            
            <FooterColumn
              title="Global citizenship"
              links={["Safety", "Diversity and Inclusion", "Sustainability"]}
            />
            
            <FooterColumn
              title="Travel"
              links={["Airports", "Cities", "Help"]}
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="#" className="text-gray-600 hover:text-hitchride-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-600 hover:text-hitchride-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-600 hover:text-hitchride-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link to="#" className="text-gray-600 hover:text-hitchride-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row text-sm text-gray-600 items-center">
            <span className="mb-2 md:mb-0 md:mr-4">© 2025 Hitch Ride Technologies Inc.</span>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-hitchride-primary">Privacy</Link>
              <Link to="#" className="hover:text-hitchride-primary">Accessibility</Link>
              <Link to="#" className="hover:text-hitchride-primary">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
