import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllUsers/AllBuyers";
import AllSeller from "../../Pages/Dashboard/AllUsers/AllSeller";
import Admin from "../../Pages/Dashboard/AllUsers/Admin";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Category from "../../Pages/Home/Categories/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import MyProducts from "../../Pages/Dashboard/MyProduct/MyProducts";

export const router = createBrowserRouter([
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute>
                    <Category></Category>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute>
                    <MyOrders></MyOrders>
                </BuyerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute>
                    <AddProduct></AddProduct>
                </SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute>
                    <MyProducts></MyProducts>
                </SellerRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element:
                    <AdminRoute>
                        <AllBuyers></AllBuyers>
                    </AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element:
                    <AdminRoute>
                        <AllSeller></AllSeller>
                    </AdminRoute>
            },
            {
                path: '/dashboard/admin',
                element:
                    <AdminRoute>
                        <Admin></Admin>
                    </AdminRoute>
            },
        ]
    }

])