import { Navigate, createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";

import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";

export const token = localStorage.getItem("access_token");
const basename = "/";

export const router = createBrowserRouter([
    {
        path: "/",
        element:  <Applayout /> ,
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
   
], {
    basename: basename
})
