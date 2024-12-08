import { useState, useContext } from 'react';

import { CartContext } from '@/context/CartContext';
import ProductDetail from './ProductDetail';
import { useAddCart } from '@/features/cart/useAddCart';

const AddToCartButton = ({ product, onCartUpdated }) => {
    // const { id, name, price } = product;
    // const [isLoading, setLoading] = useState(false);
    // const userToken = localStorage.getItem('userToken'); // Lấy token nếu đã đăng nhập

    // const addToCart = async (product) => {
    //     setLoading(true);
    //     // const { cartItems, updateCart } = useContext(CartContext);

    //     // Cấu trúc sản phẩm cần thêm
    //     const cartItem = {
    //         productId: product.id,
    //         name: product.name,
    //         price: product.price,
    //         image: product.image,
    //         quantity: 1, // Mặc định là 1
    //     };

    //     try {
    //         if (userToken) {
    //             console.log('Add when user authorized');
    //         } else {
    //             // Nếu chưa đăng nhập, lưu vào localStorage
    //             const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //             const existingItem = cart.find((item) => item.productId === product.id);

    //             if (existingItem) {
    //                 existingItem.quantity += 1; // Cập nhật số lượng nếu sản phẩm đã có trong giỏ
    //             } else {
    //                 cart.push(cartItem); // Thêm sản phẩm mới
    //             }

    //             localStorage.setItem('cart', JSON.stringify(cart));
    //             // updateCart();
    //             console.log('Product added to local cart successfully');
    //         }
    //         // Gọi callback để cập nhật giao diện giỏ hàng
    //         // onCartUpdated();
    //         // updateCart();
    //     } catch (error) {
    //         console.error('Error adding product to cart:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const { addToCart } = useContext(CartContext);
    const [isLoading, setLoading] = useState(false);
    const { addCart } = useAddCart();

    const handleAddToCart = async () => {
        setLoading(true);
        const cartItem = {
            productId: product.id,
            productDetailId: product.productDetailId,
            size: product.size,
            name: product.name,
            color: product.color,
            price: product.price,
            image: product.image,
            quantity: 1,
        };
        const token = localStorage.getItem('jwtToken');

        if (token) {
            try {
                await addCart(cartItem);
            } catch (error) {
                console.error('Error adding product to cart on server:', error);
            } finally {
                setLoading(false);
            }
        } else {
            try {
                addToCart(cartItem);
            } catch (error) {
                console.error('Error adding product to cart on local storage:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <button
            // onClick={() => addToCart(product)}
            onClick={handleAddToCart}
            disabled={isLoading}
            className="ml-auto select-none rounded-lg bg-blue-gray-900/10 align-middle text-blue-gray-900 transition-all hover:scale-110 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85]"
        >
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
    );
};

export default AddToCartButton;
