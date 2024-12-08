import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/pages/Home/Home';
import HomeUser from '../views/pages/HomeUser/HomeUser';
import Login from '../views/pages/auth/Login';
import SignUp from '../views/pages/auth/SignUp';
import ForgotPassword from '../views/pages/auth/ForgotPassword/ForgotPassword';
import OTP from '@/views/pages/auth/ForgotPassword/OTP';
import ChangePassword from '@/views/pages/auth/ChangePassword';
import MainLayout from '@/views/pages/MainLayout/MainLayout';
import ProductDetail from '@/components/ProductDetail';
import Profile from '@/views/pages/Profile/Profile';
import Checkout from '@/views/pages/Checkout/Checkout';
import ChangePass from '@/views/ChangePass/ChangePass';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />, // Sử dụng MainLayout làm component chính
        children: [
            { path: '/', element: <Home /> }, // Đây là trang chính
            { path: '/Product/:ProductID', element: <ProductDetail /> },
            { path: '/Account', element: <Profile /> },
            { path: '/ChangePass', element: <ChangePass /> },
            // { path: '/Login', element: <Login /> },
            // { path: '/SignUp', element: <SignUp /> },
            // { path: '/ForgotPassword', element: <ForgotPassword /> },
            // { path: '/OTP', element: <OTP /> },
            // { path: '/ChangePassword', element: <ChangePassword /> },
        ],
    },
    // {
    //     path: '/',
    //     element: <Home />,
    // },
    {
        path: '/HomeUser',
        element: <HomeUser />,
    },
    {
        path: '/Login',
        element: <Login />,
    },
    {
        path: '/SignUp',
        element: <SignUp />,
    },
    { path: '/ForgotPassword', element: <ForgotPassword /> },
    { path: '/OTP', element: <OTP /> },
    { path: '/ChangePassword', element: <ChangePassword /> },
    { path: '/Checkout', element: <Checkout /> },
]);

export default router;
