import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";

const CreateBlog = () => {
  const [input, setinput] = useState({
    title: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const changeImageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  async function createBlog(formData) {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/blog/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", input.title);
    formData.append("description", input.description);

    createBlog(formData);
  };
  return (
    <div className="w-full items-center lg:px-60 py-30 sm:px-20 md:px-40">
      <div>
        <h1 className="items-center text-2xl font-bold align-middle mb-3">
          Create Blog
        </h1>
        <form
          onSubmit={submitHandler}
          action="/upload"
          enctype="multipart/form-data"
          method="post"
        >
          <div className="flex flex-col space-y-1 space-x-4 mb-5">
            <Label className="text-xl">Image</Label>
            <Input
              accept="image/*"
              onChange={changeImageHandler}
              type="file"
              name="image"
              placeholder="Enter Image"
            ></Input>
          </div>
          <div className="flex flex-col space-y-1 space-x-4 mb-5">
            <Label className="text-xl">Title</Label>
            <Input
              type="text"
              name="title"
              value={input.title}
              onChange={changeHandler}
              placeholder="Enter Title"
            ></Input>
          </div>
          <div className="flex flex-col space-y-1 space-x-4 mb-5">
            <Label className="text-xl">Description</Label>
            <Textarea
              type="text"
              value={input.description}
              name="description"
              onChange={changeHandler}
              placeholder="Enter your description"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
