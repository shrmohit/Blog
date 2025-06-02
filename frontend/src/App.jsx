import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/create-blog",
      element: <CreateBlog />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
