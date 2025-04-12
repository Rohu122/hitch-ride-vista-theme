
import React from 'react';
import { Button } from "@/components/ui/button";

const ServiceCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string;
}) => {
  return (
    <div className="hitchride-card flex flex-col items-start">
      <div className="mb-4">
        <img src={icon} alt={title} className="w-20 h-20 object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="link" className="text-hitchride-primary p-0 font-medium hover:text-hitchride-primary/80">
        Details
      </Button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="hitchride-container">
        <h2 className="text-3xl font-bold mb-12">Suggestions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Courier"
            description="Hitch Ride makes same-day item delivery easier than ever."
            icon="/lovable-uploads/c1f0130a-8363-449a-9b13-dbfe63cbe8a8.png"
          />
          
          <ServiceCard
            title="Rentals"
            description="Request a trip for a block of time and make multiple stops."
            icon="/lovable-uploads/4f8d1097-03f8-443d-b11a-dd7e510d77b8.png"
          />
          
          <ServiceCard
            title="Reserve"
            description="Reserve your ride in advance so you can relax on the day of your trip."
            icon="/lovable-uploads/ae6daa29-6b88-4c3e-b7e7-ce40a98c0f1c.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
