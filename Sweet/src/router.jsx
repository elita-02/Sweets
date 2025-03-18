import { createBrowserRouter } from "react-router-dom";  
import Contacts from "./pages/Contacts";
import Jobs from "./pages/Jobs";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";
import Layout from "./Components/Layout/Layout";
import Catalog from "./pages/Catalog";
import Reteil from "./pages/Reteil";
import Wholesale from "./pages/Wholesale";
 
 
 export const myRouter = createBrowserRouter([
    {path: "/",
    element: <Layout/>,
    children:[

        {
            path: "/",
            element: <Wholesale/>
         },
         
       {
           path: "reteil",
           element: <Reteil/>
       },
       {
           path: "contacts",
           element: <Contacts/>
       },
       {
           path: "jobs",
           element: <Jobs/>
       },
       {
           path: "reviews",
           element: <Reviews/>
       },
       {
           path: "profile",
           element: <Profile/>
       },
       {
           path: "catalog",
           element: <Catalog/>
       },
    
    ]
    
 }])