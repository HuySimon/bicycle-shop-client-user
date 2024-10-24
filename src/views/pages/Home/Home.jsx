import React from 'react';
import CarouselSlider from '../../../components/CarouselSlider';
import ProductList from '../../../components/ProductList';
import Header from '../../../components/Header';
import { Button } from '@/components/ui/button';
const Home = () => {
    return (
        <>
            <main className="relative">
                {/* <div className=" fixed top-0 flex min-h-full h-full w-full z-50"> */}
                {/* Header-Nav */}
                <Header />
                {/* <div className=" bg-white border py-3 px-6">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                />
                            </svg>
                            <span className="ml-2 font-semibold text-[#252C32]">What a Market</span>
                        </div>

                        <div className="ml-6 flex flex-1 gap-x-3">
                            <div className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <span className="text-sm font-medium">Categories</span>
                            </div>

                            <input
                                type="text"
                                className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
                                defaultValue="DJI phantom"
                            />
                        </div>

                        <div className="ml-2 flex">
                            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-sm font-medium">Orders</span>
                            </div>

                            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-sm font-medium">Favorites</span>
                            </div>

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
                                <span className="text-sm font-medium">Giỏ Hàng</span>
                            </div>

                            <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                                <span className="text-sm font-medium">Đăng nhập</span>
                            </div>
                            <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
                                <span className="text-sm font-medium">Đăng ký</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-x-2 py-1 px-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm font-medium">California</span>
                        </div>

                        <div className="flex gap-x-8">
                            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                                Xe Đạp
                            </span>
                            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                                Phụ Tùng
                            </span>
                            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                                Phụ Kiện
                            </span>
                            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                                Trang Phục
                            </span>
                            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                                Dinh Dưỡng
                            </span>
                        </div>

                        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                            Becoma a seller
                        </span>
                    </div>
                </div> */}
                {/* Body */}
                <CarouselSlider />
                {/* Product-list */}
                <ProductList />
                {/* <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                    <div
                        // style="background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                        className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                    ></div>
                    <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                        <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
                            Nike Revolt
                        </div>
                        <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
                            <h1 className="text-gray-800 font-bold ">$129</h1>
                            <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div> */}
                {/* Section 1*/}
                {/* Footer */}
                <section className="bg-gradient-custom padding-x padding-t pb-8">
                    <footer className="max-container">
                        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                            <div className="flex flex-col items-start">
                                {/* <a href="/">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                >
                                    <img src={footerLogo} alt="icone de logo BikerStore" width={150} height={46} />
                                </motion.div>
                            </a> */}
                                <p className="mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">
                                    Find one of our physical stores closest to you and come visit us.
                                </p>
                                <div className="flex items-center gap-5 mt-8">
                                    {/* {socialMedia.map((icon) => (
                                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-coral-red ">
                                        <img src={icon.src} alt={icon.alt} width={24} height={24} />
                                    </div>
                                ))} */}
                                </div>
                            </div>

                            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                                <h4 className="text-white font-montserrat font-medium mb-6 text-2xl leading-normal">
                                    Hỗ Trợ Khách Hàng
                                </h4>
                                <ul>
                                    <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 cursor-pointer">
                                        <a>Support</a>
                                    </li>
                                </ul>
                                <div>
                                    <h4 className="text-white font-montserrat font-medium mb-6 text-2xl leading-normal"></h4>
                                    <ul>
                                        <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 cursor-pointer">
                                            <a>link.name</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* {footerLinks.map((section) => (
                                <div key={section}>
                                    <h4 className="text-white font-montserrat font-medium mb-6 text-2xl leading-normal">
                                        {section.title}
                                    </h4>
                                    <ul>
                                        {section.links.map((link) => (
                                            <li
                                                className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 cursor-pointer"
                                                key={link.name}
                                            >
                                                <a>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))} */}
                            </div>
                        </div>

                        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                                <img
                                    //   src={copyrightSign}
                                    alt="Copyright"
                                    width={20}
                                    height={20}
                                    className="rounded-full m-0"
                                />
                                <small>
                                    {' '}
                                    Copyright. All rights reserved. <br />{' '}
                                    <a
                                        className="underline"
                                        href="https://www.instagram.com/dh.reports/"
                                        target="_blank"
                                    >
                                        Đại Học Sài Gòn
                                    </a>
                                </small>
                            </div>
                            <p className="font-montserrat cursor-pointer mt-1 text-sm">Term & Condition</p>
                        </div>
                    </footer>
                </section>
                {/* </div> */}
            </main>
        </>
    );
};

export default Home;
