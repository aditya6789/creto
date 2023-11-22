import React from "react";
import Logo from "../components/logo";
import LoginButton from "../components/button";
import Link from "next/link";

const NavbarPage: React.FC = () => {
  return (
    
 
    <nav className="flex items-center justify-between p-3 text-white">
      {/* Left Section */}
      <Logo />
     

      {/* Middle Section */}
      <div className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/freelancer">Freelancer</Link>
        <Link href="/business">Bussiness</Link>
        <Link href="/membership">Memership</Link>



      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        
        <LoginButton />
      </div>
    </nav>
  );
  
};

export default NavbarPage;
