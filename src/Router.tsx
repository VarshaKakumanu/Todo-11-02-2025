import { createBrowserRouter } from "react-router-dom";
import { Applayout } from "./components/layouts/AppLayout";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";

// 👇 Change basename to match GitHub Pages URL
const basename = "/Todo-11-02-2025/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ],
  { basename }
);
