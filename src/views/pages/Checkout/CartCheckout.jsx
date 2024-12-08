import { TrashIcon } from '@heroicons/react/24/outline';

const CartCheckout = ({ cart, onDelete, id, productDetailId }) => {
    const { name, price, color, image, quantity: initialQuantity } = cart;
    return (
        <div key={id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
                <img src={image} alt="Sản phẩm" className="w-12 h-12" />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-gray-500">Màu sắc: {color} &nbsp; Size: 36 | 22.7 cm</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-700">{price} đ</span>
                {/* <div className="flex items-center border rounded-lg">
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                    <span className="px-3">1</span>
                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                </div> */}
                {/* <button className="text-red-500 hover:text-red-700">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-1 14H6L5 7m5-3h4m-4 0a1 1 0 011-1h2a1 1 0 011 1m-4 0h4"
                        ></path>
                    </svg>
                </button> */}
                <button
                    type="button"
                    onClick={() => onDelete(id, productDetailId)}
                    className="font-medium opacity-50 hover:opacity-100 transition-opacity duration-200"
                >
                    <TrashIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};
export default CartCheckout;
