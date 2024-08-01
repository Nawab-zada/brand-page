// components/Navigation.js
"use client"
import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';
import png from "../components/images/brand_logo.png"
const Navigation = () => {

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      
      <div className="flex-shrink-0 text-white">
       <Image src={png} alt='logo'/>
      </div>

      
      <div className="flex space-x-4">
        <Link href="/home" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/services" className="hover:text-gray-300">
          Services
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </div>

    
      <div>
      
      <Button onClick={handleClick}  className="ml-4">
        sign in
      </Button>
      </div>
    </nav>
  );
};

export default Navigation;


    