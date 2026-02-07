import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout";
import HomePage2 from "./pages/HomePage2";
import FundraiserList from "./pages/FundraiserList";
import FundraiserPage from "./pages/FundraiserPage";
import LoginPage from "./pages/LoginPage.jsx";
import "../index.css"

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage2 /> },
      { path: "/fundraisers", element: <FundraiserList /> },
      { path: "/fundraiser/:id", element: <FundraiserPage /> },
      { path: "/login", element: <LoginPage />}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>,
);
