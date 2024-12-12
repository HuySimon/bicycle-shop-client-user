import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product, price, image, color, productDetailId, quantity }) => {
    const { id, name } = product;

    // const handleAddToCart = () => {
    //     const cartItem = {
    //         id, // ID sản phẩm
    //         name, // Tên sản phẩm
    //         price, // Giá sản phẩm
    //         quantity: 1, // Mặc định là 1
    //     };

    //     if (onAddToCart) {
    //         onAddToCart(cartItem); // Gửi sản phẩm lên parent component hoặc xử lý tại đây
    //     }
    // };

    return (
        <>
            <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <Link to={`/Product/${id}`} title={name}>
                    <img src={image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                </Link>
                <div className="px-4 py-3 w-72">
                    {/* <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
                    <p className="text-lg font-bold text-black truncate block capitalize">{color}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                            {price?.toLocaleString('vi-VN')} &nbsp;₫
                        </p>
                        {/* <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del> */}
                        <AddToCartButton product={{ id, name, color, price, image, productDetailId, quantity }} />
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
