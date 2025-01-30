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
    <nav className="sticky top-1 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"> 
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-auto mr-2" src={logo} alt="logo" />
              <span className="text-xl -tracking-tight">NAMICC</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-14">
              {navItems.map((item, index) => (
                <li key = {index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
          </ul>

              <Link to = "/donation-details">
              <button className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className="bg-gradient-to-r from-green-500 to-green-800 py-2 px-3 rounded-md">
                  Donate
                </a>
              </button>
              </Link>

              <div className="lg:hidden md: flex flex-col justify-center">
                <button onClick={toggleNarbar}>
                  {mobileDrawerOpen ? <X/> : <Menu/>}
                </button>
              </div> 
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={item.item} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a className="py-2 px-3 border rounded-md">
                Sign In
              </a>

              <a className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800">
                Create an account
              </a>
            </div>

          </div>
        )}
      </div>
    </nav>

    
  );
};

export default NavBar;

