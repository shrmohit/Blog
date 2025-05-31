import React from "react";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const Navbar = () => {
  const navigate = useNavigate();
  const logoutHandle = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-full item-center px-10 py-5 bg-gray-900  ">
      <div className="w-full flex items-center justify-between ">
        <div>
          <h1 className="font-bold text-2xl text-white">Blogly</h1>
        </div>

        <div className="space-x-4">
          <Link to="/register">
            <Button className="bg-white text-black border-none px-5 py-3 hover:text-white ">
              REGISTER
            </Button>
          </Link>

          <Link to="/login">
            <Button className="bg-white text-black  px-5 py-3 hover:text-white ">
              LOGIN
            </Button>
          </Link>

          <Button
            onClick={logoutHandle}
            className="bg-white text-black  px-5 py-3 hover:text-white "
          >
            LOGOUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
