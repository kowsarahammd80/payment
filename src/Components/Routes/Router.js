import Main from "../../LayOut/Main/Main";
import BkashError from "../BkashError/BkashError";
import ErrorShow from "../ErrorShow/ErrorShow";
import Home from "../Home/Home";
import PaymentReTest from "../PaymentRetest/PaymentReTest";
import PaymnetTest from "../PaymentTest/PaymnetTest";
// import PaymnetTest from "../PaymentTest/PaymnetTest";
// import PaymnetTest from "../PaymentTest/PaymnetTest";
import Success from "../Success/Success";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
       path: '/',
       element: <Main/>,
       children: [
        {
            path: '/',
            element: <Home/>

        },
        {
            path: '/reTest',
            element: <PaymnetTest/>
        },
        {
            path: '/error?',
            element: <ErrorShow/>
        },
        {
            path: '/success?',
            element: <Success/>
        },

        {
            path: '*',
            element: <BkashError/>, // Display ErrorShow for undefined routes
          },
       ]
    }
])

export default router;