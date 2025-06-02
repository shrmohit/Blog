import React from "react";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../feature/user/userSlice";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandle = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
        dispatch(logout());
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 px-10 py-5 z-50">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl text-white">Blogly</h1>
        </div>
        <div>
          <Link>
            <Button>Create Blog</Button>
          </Link>
        </div>

        <div className="space-x-4">
          {!isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <Link to="/register">
                <Button className="bg-white text-black border-none px-5 py-3 hover:text-white">
                  REGISTER
                </Button>
              </Link>

              <Link to="/login">
                <Button className="bg-white text-black px-5 py-3 hover:text-white">
                  LOGIN
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <Button
                onClick={logoutHandle}
                className="bg-white text-black px-5 py-3 hover:text-white"
              >
                LOGOUT
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
