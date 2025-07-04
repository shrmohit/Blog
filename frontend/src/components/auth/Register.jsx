import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  async function registerUser() {
    const res = await fetch("http://localhost:8000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      toast.success(data.message);
      navigate("/login");
    } else {
      toast.error(data.message);
      console.log(data);
    }
  }
  const formHandler = (e) => {
    e.preventDefault();
    console.log(input);
    registerUser();

    setInput({
      name: "",
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
          <h1 className="font-bold text-2xl">Register</h1>
          <div>
            <Label className="my-2 mx-1">Name</Label>
            <Input
              value={input.name}
              onChange={changeHandler}
              name="name"
              type="text"
            />
          </div>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
