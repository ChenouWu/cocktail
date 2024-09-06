import {createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Newsletter from "./pages/NewsLetter";
import { loader } from "./pages/Landing";
import {loader2} from "./components/SingleDrink";

import SingleDrink from "./components/SingleDrink";

const router = createBrowserRouter([
  {
  path:"/", 
  element:<HomeLayout/>,
  children:[
    {
      index:true,
      element: <Landing/>,
      loader:loader,
    },
    {
      path:"/cocktail/:id",
      element:<SingleDrink/>,
      loader: loader2,
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/newsLetter',
      element:<Newsletter/>
    },
  ]
  },
  {
    path:'/about',
    element:(
      <About/>
    ),
  },
  
])


const App = () => {
  return <RouterProvider router={router}/>
};
export default App;
