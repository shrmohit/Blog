import React from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full item-center px-10 py-5 bg-gray-900  ">
      <div className="w-full flex items-center justify-between ">
        <div>
          <h1 className="font-bold text-2xl text-white">Blogly</h1>
        </div>

        <div className="space-x-4">
          <Link to="/register">
            <Button className="bg-white text-black border-none px-5 py-3 hover:text-white bg">
              REGISTER
            </Button>
          </Link>
          <Link to="login">
            <Button className="bg-white text-black  px-5 py-3 hover:text-white">
              LOGIN
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
