
import React from "react";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RideMap from "./RideMap";

const Hero = () => {
  return (
    <div className="bg-white py-12">
      <div className="hitchride-container flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-10 mb-10 lg:mb-0">
          <h1 className="text-5xl font-bold mb-8">
            Go anywhere with <span className="text-hitchride-primary">Hitch Ride</span>
          </h1>
          
          <Tabs defaultValue="ride" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="ride" className="data-[state=active]:bg-hitchride-primary data-[state=active]:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.5-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
                Ride
              </TabsTrigger>
              <TabsTrigger value="courier" className="data-[state=active]:bg-hitchride-primary data-[state=active]:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="m7.9 11 2.2 2.2c.7.7 1.5 1.4 2.4 1.9l3.5 2.8c1.3.8 2.7 1.4 4.2 1.6l.9.2c1.1.2 2.2-.4 2.6-1.5l.7-2.4c.2-.6 0-1.2-.4-1.7l-1.9-1.9a2 2 0 0 1-.6-1.4v-1.1" />
                  <path d="M11.6 15H7.9a2 2 0 0 1-1.9-2.5L9.5 3" />
                  <path d="m9.5 3 1 6.1" />
                  <path d="M4.6 17.2c-.3.4-.4 1-.2 1.5l.7 2.5c.2.6.8 1.1 1.5 1.1h2.8c.9 0 1.6-.6 1.9-1.4l.8-2.4c.2-.7 0-1.4-.5-1.9l-2.5-2.5" />
                  <path d="M13.6 3h-.7l-.7 3.5-.8 4.5" />
                  <path d="m14.7 3 .9 5.2.9 4.8" />
                  <path d="M19.5 3a11 11 0 0 0-2.4 9.6" />
                </svg>
                Courier
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="ride" className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <Input className="pl-10 border-2 focus:border-hitchride-primary" placeholder="Pickup location" />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <Input className="pl-10 border-2 focus:border-hitchride-primary" placeholder="Dropoff location" />
              </div>
              
              <div className="flex space-x-4">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Button variant="outline" className="pl-10 w-full justify-between">
                    Today
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </Button>
                </div>
                
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Button variant="outline" className="pl-10 w-full justify-between">
                    Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </Button>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="bg-hitchride-dark text-white hover:bg-hitchride-dark/90 w-full py-6">
                  See prices
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-500 pt-2">
                Log in to see your recent activity
              </div>
            </TabsContent>
            
            <TabsContent value="courier" className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <Input className="pl-10 border-2 focus:border-hitchride-primary" placeholder="Pickup location" />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <Input className="pl-10 border-2 focus:border-hitchride-primary" placeholder="Dropoff location" />
              </div>
              
              <div className="pt-4">
                <Button className="bg-hitchride-dark text-white hover:bg-hitchride-dark/90 w-full py-6">
                  Request courier
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden h-[400px] lg:h-auto">
          <RideMap />
        </div>
      </div>
    </div>
  );
};

export default Hero;
