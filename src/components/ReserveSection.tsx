
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Clock } from "lucide-react";

const ReserveSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="hitchride-container">
        <h2 className="text-3xl font-bold mb-12">Plan for later</h2>
        
        <div className="bg-hitchride-secondary/20 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Get your ride right with <span className="text-hitchride-primary">Hitch Ride</span> Reserve
              </h3>
              
              <p className="text-xl mb-8">Choose date and time</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input className="pl-10 bg-white" placeholder="Date" />
                </div>
                
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input className="pl-10 bg-white" placeholder="Time" />
                </div>
              </div>
              
              <Button className="bg-hitchride-dark text-white hover:bg-hitchride-dark/90 w-full">
                Next
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Benefits</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CalendarIcon className="h-6 w-6 text-hitchride-dark flex-shrink-0" />
                    <div>
                      <p className="font-medium">Choose your exact pickup time up to 90 days in advance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-hitchride-dark flex-shrink-0" />
                    <div>
                      <p className="font-medium">Extra wait time included to meet your ride.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hitchride-dark flex-shrink-0">
                      <path d="M21 6H3" />
                      <path d="M17 4V2" />
                      <path d="M7 4V2" />
                      <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                      <path d="M16 14h6" />
                      <path d="M19 11v6" />
                    </svg>
                    <div>
                      <p className="font-medium">Cancel at no charge up to 60 minutes in advance.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="link" className="text-hitchride-primary p-0">
                    See terms
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;
