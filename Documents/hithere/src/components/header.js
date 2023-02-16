import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-4 py-8">
      <div className="container mx-auto flex items-center ">
        <div className="w-1/5 sm:w-3/5">
        <Link to="/"><p className="text-lg cursor-pointer font-semibold text-white hover:text-xl hover:text-gray-100">I.E. 18169</p></Link>
        </div>
    <div className="w-4/5 sm:w-2/5">
    <nav>
          <ul className="flex justify-evenly">
            <Link to="/aboutus"><li className="sm:mr-32 text-lg cursor-pointer font-semibold text-white hover:text-xl hover:text-gray-100">
                Acerca de
            </li></Link>
            <Link to="/contact"><li className="cursor-pointer text-lg font-semibold text-white hover:text-xl hover:text-gray-100">
                Contacto
            </li></Link>
          </ul>
        </nav>
    </div>
      </div>
    </header>
  );
};

export default Header;
