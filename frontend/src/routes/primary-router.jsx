import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../components/auth/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
