const Footer = () => {
    return (
        // <section className="bg-gradient-custom padding-x padding-t pb-8 pl-8">
        //     <footer className="max-container">
        //         <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        //             <div className="flex flex-col items-start">
        //                 {/* <a href="/">
        //         <motion.div
        //             initial={{ opacity: 0, scale: 0 }}
        //             whileInView={{ opacity: 1, scale: 1 }}
        //             transition={{ duration: 0.7, delay: 0.2 }}
        //         >
        //             <img src={footerLogo} alt="icone de logo BikerStore" width={150} height={46} />
        //         </motion.div>
        //     </a> */}
        //                 <p className="mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">
        //                     CÔNG TY TNHH ĐẠI HỌC SÀI GÒN
        //                 </p>
        //                 <p className="mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">
        //                     Người đại diện: Âu Hạo Nhiên
        //                 </p>
        //                 <p className="mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">
        //                     Địa chỉ: 273 An Dương Vương, Phường 3, Quận 5, TP. HCM
        //                 </p>
        //                 {/* <div className="flex items-center gap-5 mt-8"> */}
        //                 {/* <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-coral-red "> */}
        //                 {/* <img src={icon.src} alt={icon.alt} width={24} height={24} /> */}
        //                 {/* Người đại diện: Âu Hạo Nhiên */}
        //                 {/* </div> */}
        //                 {/* </div> */}
        //             </div>

        //             <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        //                 <h4 className="text-white font-montserrat font-medium mb-6 text-2xl leading-normal">
        //                     Hỗ Trợ Khách Hàng
        //                 </h4>
        //                 <h4 className="text-white font-montserrat font-medium mb-6 text-2xl leading-normal">
        //                     Hỗ Trợ Khách Hàng
        //                 </h4>
        //                 {/* <ul>
        //             <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 cursor-pointer">
        //                 <a>Support</a>
        //             </li>
        //         </ul> */}
        //                 {/* <div>
        //             <h4 className="text-white font-montserrat font-medium mb-6 text-2xl leading-normal"></h4>
        //             <ul>
        //                 <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 cursor-pointer">
        //                     <a>link.name</a>
        //                 </li>
        //             </ul>
        //         </div> */}
        //                 <div>
        //                     <h4 className="text-white font-montserrat font-medium mb-6 text-2xl leading-normal">
        //                         Chính sách bảo hành
        //                     </h4>
        //                     <ul>
        //                         <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300 cursor-pointer">
        //                             <a>i do know</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        //             <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
        //                 <img
        //                     //   src={copyrightSign}
        //                     alt="Copyright"
        //                     width={20}
        //                     height={20}
        //                     className="rounded-full m-0"
        //                 />
        //                 <small>
        //                     {' '}
        //                     Copyright. All rights reserved. <br />{' '}
        //                     <a className="underline" href="https://www.instagram.com/dh.reports/" target="_blank">
        //                         Đại Học Sài Gòn
        //                     </a>
        //                 </small>
        //             </div>
        //             <p className="font-montserrat cursor-pointer mt-1 text-sm">Term & Condition</p>
        //         </div>
        //     </footer>
        // </section>
        <footer className="text-white px-8 py-6 bg-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">Example</h3>
                    <p className="mb-2">Example</p>
                    <p className="mb-2">123 Example Street, Example City, Example Country</p>
                    <p className="mb-2">
                        <a href="tel:+1514890000" className="hover:text-yellow-400">
                            1-514-890-0000
                        </a>
                    </p>
                    <p>
                        <a href="mailto:calinscompagnies@calins.com" className="hover:text-yellow-400">
                            calinscompagnies@calins.com
                        </a>
                    </p>
                </div>
                <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">Example</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                Delivery Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                Our Stores
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                Help
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                Work at Hugs
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">Example</h3>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                My Personal Information
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                My Addresses
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                My Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-yellow-400">
                                My Favorites
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <ul className="mb-4">
                        <li>
                            <a href="tel:+1514890000" className="hover:text-yellow-400">
                                1-514-890-0000
                            </a>
                        </li>
                        <li>
                            <a href="mailto:calinscompagnies@calins.com" className="hover:text-yellow-400">
                                Send mail
                            </a>
                        </li>
                    </ul>
                    <div className="mt-4 icons">
                        <a href="#" className="mr-2">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="#" className="mr-2">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="mailto:calinscompagnies@calins.com">
                            <i className="far fa-envelope fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-center mt-8">&copy; 2024 - SGU All rights reserved.</p>
        </footer>
    );
};
export default Footer;
