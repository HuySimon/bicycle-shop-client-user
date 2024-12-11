import { useEffect, useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import { CartContext } from '@/context/CartContext';
import { useSyncCart } from '@/features/cart/useSyncCart';
import CartCheckout from './CartCheckout';
import { useDeleteCart } from '@/features/cart/useDeleteCart';
import DeliveryInfoForm from './DeliveryInfoForm';
import { useUser } from '@/features/authentication/useUser';
import Spinner from '@/components/Spinner';
import CartList from './CartList';

const Checkout = () => {
    const { isLoading, user, isFetching } = useUser();
    const isLoadingUser = isLoading || isFetching;

    useEffect(() => {
        document.title = 'Thanh toán';
    }, []);

    const [isCollapsed, setIsCollapsed] = useState(false);
    const { cartItems, removeFromCart, refreshCart } = useContext(CartContext);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    if (isLoadingUser) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-50">
                <section className="mx-auto my-0 max-w-6xl px-4 py-5">
                    <div className="flex items-center justify-center">
                        <Spinner size="lg" />
                    </div>
                </section>
            </div>
        );
    }

    return (
        <>
            <header className="sticky top-0 z-20 bg-white shadow ">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Link
                                    to="/"
                                    className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                                    href="#"
                                >
                                    {/* <img src="/public/new-sd-logo.png" alt="" className="h-8 w-auto md:h-10" /> */}
                                    SGUBIKE
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-100 min-h-screen pl-[150px]">
                {/* <!-- Danh sách sản phẩm --> */}
                <div className="bg-white shadow-md rounded-lg p-6 max-h-fit sticky top-[90px]">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Giỏ hàng</h2>
                        <button
                            onClick={toggleCollapse}
                            className="text-black-500 hover:text-black-700 flex items-center gap-1"
                        >
                            {/* {isCollapsed ? 'Hiển thị tất cả' : 'Thu gọn'} */}
                            <svg
                                className={`w-5 h-5 transform transition-transform ${
                                    isCollapsed ? 'rotate-180' : 'rotate-0'
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 15l7-7 7 7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`space-y-4 overflow-y-auto transition-all duration-300 min-w-[40rem] max-w-[60rem] ${
                            isCollapsed ? 'h-0 opacity-0' : 'h-full opacity-100'
                        }`}
                    >
                        <CartList cartItems={cartItems} />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <DeliveryInfoForm user={user} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
