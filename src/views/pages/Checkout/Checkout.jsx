import { useEffect, useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import { CartContext } from '@/context/CartContext';
import { useSyncCart } from '@/features/cart/useSyncCart';
import CartCheckout from './CartCheckout';
import { useDeleteCart } from '@/features/cart/useDeleteCart';

const Checkout = () => {
    useEffect(() => {
        document.title = 'Thanh toán';
    }, []);

    const [isCollapsed, setIsCollapsed] = useState(false);
    const { cartItems, removeFromCart, refreshCart } = useContext(CartContext);
    const { cart, isLoading } = useSyncCart();
    const { deleteCart } = useDeleteCart();

    console.log(cartItems);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleDelete = async (id, productDetailId) => {
        try {
            await deleteCart(productDetailId);
        } catch (error) {
            console.error('Error delete product to cart on server:', error);
        }
    };
    const totalAmount = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
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
                        <h2 className="text-lg font-semibold">5 SẢN PHẨM TRONG GIỎ</h2>
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
                        className={`space-y-4 overflow-y-auto transition-all duration-300 ${
                            isCollapsed ? 'h-0 opacity-0' : 'h-60 opacity-100'
                        }`}
                        style={{ maxHeight: '240px' }} // Adjust for vertical scroll
                    >
                        {/* <!-- Sản phẩm 1 --> */}
                        {cartItems.length === 0 ? (
                            <span className="text-gray-500">Bạn có không có sản phẩm nào trong giỏ hàng của bạn.</span>
                        ) : (
                            cartItems?.map((c) => (
                                <CartCheckout
                                    key={c.productId}
                                    cart={c}
                                    name={c.name}
                                    id={c.productId}
                                    productDetailId={c.productDetailId}
                                    price={c.price}
                                    size={c.size}
                                    color={c.color}
                                    image={c.image}
                                    quantity={c.quantity}
                                    onDelete={handleDelete}
                                />
                            ))
                        )}
                        {/* <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-4">
                                <img src="https://via.placeholder.com/50" alt="Sản phẩm" className="w-12 h-12" />
                                <div>
                                    <p className="font-semibold">Sandal nam nữ cao cấp F8B quai hậu xoay</p>
                                    <p className="text-sm text-gray-500">Màu sắc: Xám &nbsp; Size: 36 | 22.7 cm</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-semibold text-gray-700">549.000 đ</span>
                                <div className="flex items-center border rounded-lg">
                                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                    <span className="px-3">1</span>
                                    <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                                </div>
                                <button className="text-red-500 hover:text-red-700">
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
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="flex-col">
                    {/* <!-- Địa chỉ giao hàng --> */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-lg font-semibold mb-4">Địa chỉ giao hàng</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Họ *</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="Nhập họ"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Tên *</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="Nhập tên"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium mb-1">Địa chỉ đường *</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="VD: 204 Võ Thành Trang"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Tỉnh/TP *</label>
                                <select className="w-full border rounded-lg px-3 py-2">
                                    <option>Chọn Tỉnh/Thành phố</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Quận/Huyện *</label>
                                <select className="w-full border rounded-lg px-3 py-2">
                                    <option>Chọn Quận/Huyện</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phường/Xã *</label>
                                <select className="w-full border rounded-lg px-3 py-2">
                                    <option>Chọn Phường/Xã</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Số Điện thoại *</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg px-3 py-2"
                                    placeholder="Nhập 10 số điện thoại"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium mb-1">Ghi chú thêm</label>
                            <textarea
                                className="w-full border rounded-lg px-3 py-2"
                                rows="3"
                                placeholder="VD: giao hàng cho người nhà..."
                            ></textarea>
                        </div>
                    </div>

                    {/* <!-- Phương thức vận chuyển --> */}
                    {/* <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                    <h2 className="text-lg font-semibold mb-4">Phương thức vận chuyển</h2>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            id="freeship"
                            name="shipping"
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="freeship" className="text-sm">
                            0 đ &nbsp; Phí giao hàng
                        </label>
                    </div>
                </div> */}
                    {/*  */}
                    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                        <h2 className="text-lg font-bold mb-4">Tạm tính</h2>
                        <div className="flex justify-between text-gray-700 mb-2">
                            <span>Giá sản phẩm</span>
                            <span>{totalAmount.toLocaleString('vi-VN')} đ</span>
                        </div>
                        <div className="flex justify-between text-gray-700 mb-2">
                            <span>Vận chuyển Phí giao hàng</span>
                            <span>0 đ</span>
                        </div>
                        <hr className="border-t border-gray-300 my-2" />
                        <div className="flex justify-between text-gray-800 font-bold">
                            <span>Tổng cộng</span>
                            <span>{totalAmount.toLocaleString('vi-VN')} đ</span>
                        </div>
                    </div>

                    {/*  */}
                    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                        <h2 className="text-lg font-semibold mb-4">Phương thức thanh toán</h2>
                        <div className="space-y-4">
                            {/* <!-- Thanh toán COD --> */}
                            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-4 text-sm font-medium">Thanh toán khi nhận hàng (COD)</span>
                            </label>

                            {/* <!-- Thanh toán qua MoMo --> */}
                            <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                    checked
                                />
                                <div className="ml-4">
                                    <div className="flex items-center gap-2">
                                        <img src="/public/zalopay-seeklogo.svg" alt="ZaloPay" className="w-8 h-8" />
                                        <span className="text-sm font-medium">Thanh toán qua ZaloPay</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Bạn sẽ được chuyển hướng đến trang web của ZaloPay.
                                    </p>
                                </div>
                            </label>

                            {/* <!-- Thanh toán trực tuyến --> */}
                            {/* <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input type="radio" name="payment" className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                            <div className="ml-4">
                                <div className="flex items-center gap-2">
                                    <img src="https://via.placeholder.com/32x32" alt="VNPay" className="w-8 h-8" />
                                    <span className="text-sm font-medium">
                                        Thanh toán trực tuyến (VNPAY-QR, Thẻ nội địa, Thẻ quốc tế, Apple Pay)
                                    </span>
                                </div>
                            </div>
                        </label> */}
                        </div>
                    </div>

                    <Button className="w-full mt-6">Tiến hành đặt hàng</Button>
                </div>
            </div>
        </>
    );
};

export default Checkout;
