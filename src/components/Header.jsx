import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
    // Khai báo state để quản lý việc đóng/mở menu
    const [isOpen, setIsOpen] = useState(false);

    // Hàm xử lý khi nhấn nút toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="bg-white shadow">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">
                                    Brand
                                </a>

                                {/* <!-- Search input on desktop screen --> */}
                                <div className="mx-10 hidden md:block">
                                    <input
                                        type="text"
                                        className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </div>
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
                            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
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
                            </div>
                            <Sheet>
                                <SheetTrigger>
                                    <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
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
                                        {/* <span className="text-sm font-medium">Giỏ Hàng</span> */}
                                    </div>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Giỏ hàng</SheetTitle>
                                        <SheetDescription>
                                            <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
                                                <div className="col-span-12 lg:col-span-2 img box">
                                                    <img
                                                        src="https://pagedone.io/asset/uploads/1701162826.png"
                                                        alt="speaker image"
                                                        className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                                                    />
                                                </div>
                                                <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                                                    <div className="flex items-center justify-between w-full mb-4">
                                                        <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                                                            Round white portable speaker
                                                        </h5>
                                                        <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                                                            <svg
                                                                width="34"
                                                                height="34"
                                                                viewBox="0 0 34 34"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <circle
                                                                    className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                                                                    cx="17"
                                                                    cy="17"
                                                                    r="17"
                                                                    fill=""
                                                                />
                                                                <path
                                                                    className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                                                                    d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                                                    stroke="#EF4444"
                                                                    strokeWidth="1.6"
                                                                    strokeLinecap="round"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                                                        Introducing our sleek round white portable speaker, the epitome
                                                        of style and sound! Elevate your auditory experience with this
                                                        compact yet powerful device that delivers crystal-clear audio
                                                        wherever you go.{' '}
                                                        <a href="javascript:;" className="text-indigo-600">
                                                            More....
                                                        </a>
                                                    </p>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-4">
                                                            <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                                                <svg
                                                                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                                    width="18"
                                                                    height="19"
                                                                    viewBox="0 0 18 19"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.5 9.5H13.5"
                                                                        stroke=""
                                                                        strokeWidth="1.6"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <input
                                                                type="text"
                                                                id="number"
                                                                className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                                                                placeholder="2"
                                                            />
                                                            <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                                                <svg
                                                                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                                    width="18"
                                                                    height="19"
                                                                    viewBox="0 0 18 19"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3.75 9.5H14.25M9 14.75V4.25"
                                                                        stroke=""
                                                                        strokeWidth="1.6"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                                                            $220
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
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

                            <div className="flex items-center py-2 -mx-1 md:mx-0">
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
                            </div>

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

                    <div className="mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap scroll-hidden">
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
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
