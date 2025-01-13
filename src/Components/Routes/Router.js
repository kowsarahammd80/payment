import Main from "../../LayOut/Main/Main";
import Home from "../Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
       path: '/',
       element: <Main/>,
       children: [
        {
            path: '/',
            element: <Home/>
        }
       ]
    }
])

export default router;