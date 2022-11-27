import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../../Layout/Dashbord";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Buyer from "../../Pages/Buyer/Buyer";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import Products from "../../Pages/Products/Products";
import Seller from "../../Pages/Seller/Seller";
import SignUp from "../../Pages/SignUp/SignUp";
import Traffic from "../../Pages/Traffic/Traffic";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <Products></Products>,

            }
        ]
    },
    {
        path: '/dashbord',
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: '/dashbord',
                element: <Traffic></Traffic>
            },
            {
                path: '/dashbord/buyer',
                element: <Buyer></Buyer>
            },
            {
                path: '/dashbord/seller',
                element: <Seller></Seller>
            },
            {
                path: '/dashbord/seller/myproducts',
                element: <MyProducts></MyProducts>
            },
        ]

    }
])

export default router;