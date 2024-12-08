import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import CartList from './CartList';
import SheetUserInfo from './SheetUserInfo';
import ButtonLoginLogup from './ButtonLoginLogUp';
import SearchBar from './ui/SearchBar';
import { useProducts } from '@/features/product/useProducts';

const Header = () => {
    // Khai báo state để quản lý việc đóng/mở menu
    const [isOpen, setIsOpen] = useState(false);
    const { isLoading, data: products, isFetching } = useProducts();

    // Hàm xử lý khi nhấn nút toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                                    SGUBIKE
                                </Link>

                                {/* <form>
                                    <div className="has-[:focus]:outline-solid flex max-w-80 items-center justify-between gap-2 rounded-md border-[1px] border-solid border-slate-400 px-3 py-2 has-[:focus]:outline has-[:focus]:outline-[1px] has-[:focus]:outline-slate-900 mx-10 hidden md:block">
                                        <input
                                            type="text"
                                            className="w-32 bg-inherit text-slate-900 focus:outline-none border-none"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <button>Ấn</button>
                                    </div>
                                </form> */}

                                {/* <!-- Search input on desktop screen --> */}
                                {/* <div className="mx-10 hidden md:block">
                                    <input
                                        type="text"
                                        className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button >Ấn</button>
                                </div> */}
                                <SearchBar
                                    queryParamKey="query"
                                    pageParamKey="page"
                                    inputPlaceholder="Tìm kiếm xe đạp..."
                                    isLoading={isLoading || isFetching}
                                />
                                {/* <SearchBar /> */}
                            </div>

                            {/* <!-- Mobile menu button -->  */}
                            {/* @click="isOpen = !isOpen" */}
                            <div className="flex md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                                    aria-label="toggle menu"
                                >
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
                            {/* <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                                <a
                                    className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0"
                                    href="#"
                                >
                                    Home
                                </a>
                                <a
                                    className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0"
                                    href="#"
                                >
                                    Blog
                                </a>
                                <a
                                    className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0"
                                    href="#"
                                >
                                    Compoents
                                </a>
                                <a
                                    className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0"
                                    href="#"
                                >
                                    Courses
                                </a>
                            </div> */}
                            {/* Carts */}
                            <CartList />
                            {/* Profile */}
                            {/* <SheetUserInfo /> */}
                            {/* <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                                <div className="relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-500"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                                        3
                                    </span>
                                </div>
                                <span className="text-sm font-medium">Giỏ Hàng</span>
                            </div> */}

                            {/* <div className="flex items-center py-2 -mx-1 md:mx-0">
                                <Link
                                    className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-gray-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto"
                                    to="/Login"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-0 md:w-auto"
                                    to="/SignUp"
                                >
                                    Tạo Account
                                </Link>
                            </div> */}
                            <ButtonLoginLogup />

                            {/* <!-- Search input on mobile screen --> */}
                            <div className="mt-3 md:hidden">
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap scroll-hidden">
                        <a
                            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
                            href="#"
                        >
                            Xe Đạp
                        </a>
                        <a
                            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
                            href="#"
                        >
                            Phụ Tùng
                        </a>
                        <a
                            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
                            href="#"
                        >
                            Phụ Kiện
                        </a>
                        <a
                            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
                            href="#"
                        >
                            Trang Phục
                        </a>
                        <a
                            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
                            href="#"
                        >
                            Dinh Dưỡng
                        </a>
                    </div> */}
                </nav>
            </header>
        </>
    );
};

export default Header;
