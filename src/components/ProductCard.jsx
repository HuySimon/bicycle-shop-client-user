import { Link } from 'react-router-dom';

const ProductCard = ({ product, price, image }) => {
    const { id, name } = product;
    console.log(image);
    return (
        <>
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <Link to={`/Product/${id}`} title={name}>
                    <img src={image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                </Link>
                <div className="px-4 py-3 w-72">
                    {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{price}</p>
                        {/* <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del> */}
                        <button className="ml-auto select-none rounded-lg bg-blue-gray-900/10 align-middle text-blue-gray-900 transition-all hover:scale-110 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-bag-plus"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* </a> */}
            </div>
            {/* <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 duration-500 hover:scale-105 hover:shadow-xl">
                <div>
                    <img
                        className="object-cover h-64 w-full"
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Converse sneakers"
                    />
                </div>

                <div className="flex flex-col gap-1 mt-4 px-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">Converse Sneakers</h2>
                    <span className="font-normal text-gray-600 dark:text-gray-300">High Top (Lemon Yellow)</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-50">$60</span>
                </div>

                <div className="flex gap-4 mt-4 px-4">
                    <span className="sr-only">Colors available</span>

                    <button
                        aria-label="Yellow"
                        className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"
                    ></button>

                    <button
                        aria-label="Red"
                        className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"
                    ></button>

                    <button
                        aria-label="Blue"
                        className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"
                    ></button>

                    <button
                        aria-label="Black"
                        className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"
                    ></button>
                </div>

                <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
                    <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                        <span className="text-base">Add to Cart</span>
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </button>
                </div>
            </article> */}
        </>
    );
};

export default ProductCard;
