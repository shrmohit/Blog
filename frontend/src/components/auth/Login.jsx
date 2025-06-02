import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../feature/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  async function loginUser() {
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", {
        email: input.email,
        password: input.password,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
        dispatch(login());
      }
    } catch (error) {
      console.error(error);
    }
  }
  // async function loginUser() {
  //   const res = await fetch("http://localhost:8000/api/user/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(input),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   if (data.success) {
  //     toast.success(data.message);
  //     navigate("/");
  //   } else {
  //     toast.error(data.message);
  //     console.log(data);
  //   }
  // }
  const formHandler = (e) => {
    e.preventDefault();
    console.log(input);
    loginUser();

    setInput({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <Navbar />
      <div className="w-full text-center mt-10 ">
        <form
          onSubmit={formHandler}
          className="space-y-6 w-1/3 mx-auto border-gray-300  border-2 p-5 rounded-lg "
        >
          <h1 className="font-bold text-2xl">Login</h1>

          <div>
            <Label className="my-2 mx-1">Email</Label>
            <Input
              name="email"
              value={input.email}
              onChange={changeHandler}
              type="email"
            />
          </div>
          <div>
            <Label className="my-2 mx-1">Password</Label>
            <Input
              name="password"
              value={input.password}
              onChange={changeHandler}
              type="password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
