import logo from "../assets/logo.png"
import { navItems } from "../constants";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const toggleNarbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  };

  return (
    <nav className="sticky top-1 z-50 py-5 backdrop-blur-lg border-b border-neutral-700/80"> 
      <div className="container px-4 mx-auto text-[0.98rem]">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
              <img className="h-14 w-14 mr-2" src={logo} alt="logo" />
              <span className="text-xl -tracking-tight">NAMICC</span>
          </div>

          {/* Desktop View */}
          <ul className="hidden lg:flex ml-14 gap-11">
              {navItems.map((item, index) => (
                <li key = {index}>
                  <a href={item.href}
                  className="text-green-800 hover:underline">{item.label}</a>
                </li>
              ))}
          </ul>

          <div className="hidden lg:flex justify-center items-center">
            <Link to = "/donation-details">
              <button className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md text-white">
                Donate
              </button>
            </Link>
          </div>

              <div className="lg:hidden md: flex flex-col justify-center">
                <button onClick={toggleNarbar}>
                  {mobileDrawerOpen ? <X/> : <Menu/>}
                </button>
              </div> 
        </div>
        
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-6 flex flex-col justify-start items-start gap-4 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={item.item} className="py-2 w-full">
                  <a href={item.href}
                  className="text-black text-[1rem]">
                  {item.label}</a>
                  
                </li>
              ))}
            </ul>

            <div className="w-full">
              <Link to = "/donation-details">
                <button className="py-2 rounded-md bg-gradient-to-r from-green-500 to-green-800 w-full justify-center items-center text-white">
                  Donate
                </button>
              </Link>
            </div>

          </div>
        )}
      </div>
    </nav>

    
  );
};

export default NavBar;