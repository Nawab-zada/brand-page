"use client"

import Button from './Button';

import Image from 'next/image';
import png from "./shoe_image.png"
const HeroSection = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
  
    <section className="flex flex-row lg:flex-row items-center justify-between p-8 bg-gray-100 m-7">
      {/* Content */}
      <div className="lg:w-1/2 space-y-4">
        <h1 className="text-6xl font-bold text-gray-800">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-600 text-xs w-[350px] font-sans">
          Discover the best products, handmade by local artisans, and bring home the quality and craftsmanship that stands the test of time.
        </p>
        
        {/* Buttons */}
        <div className="flex space-x-4 ">
        <Button onClick={handleClick}  className="ml-4">
        learn more
      </Button>
        <Button onClick={handleClick}  className="ml-4">
        Get started
      </Button>
        </div>
      </div>

      {/* Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src={png} // Replace with your image path
          alt="Hero Image"
          width={500}
          height={500}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;

