import React from "react";
import { Button } from "../../components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full item-center p-5 bg-gray-900  ">
      <div className="w-full flex items-center justify-between ">
        <div>
          <h1 className="font-bold text-2xl text-white">Blogly</h1>
        </div>

        <div className="space-x-4">
          <Button className="bg-white text-black">REGISTER</Button>
          <Button className="bg-white text-black">SIGN IN</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
