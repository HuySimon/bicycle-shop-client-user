import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

import Spinner from '@/components/Spinner';
import { useSyncCart } from '@/features/cart/useSyncCart';

export const CartContext = createContext();

const validateToken = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Thời gian hiện tại tính bằng giây
        return decoded.exp > currentTime;
    } catch (error) {
        console.error('Invalid token:', error);
        return false;
    }
};

export const CartProvider = ({ children, isAuthenticated }) => {
    const { cart, isLoading, isFetching } = useSyncCart();
    const [cartItems, setCartItems] = useState([]);
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // const { getCartByIdSync, isLoading } = useCartSync();
    // const { cart, isFetch } = useCart();
    // Load cart from localStorage or backend

    useEffect(() => {
        // const fetchCart = () => {
        //     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        //     setCartItems(storedCart);
        // };
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const isValid = validateToken(token);
            if (!isValid) {
                localStorage.removeItem('jwtToken');
            }
        }
        // if (token) {
        //     const isValid = validateToken(token);
        //     if (!isValid) {
        //         localStorage.removeItem('jwtToken');
        //         console.warn('Token expired or invalid, resetting cart.');
        //         return;
        //     } else {
        //         if (cart && cart.length > 0) {
        //             console.log('Setting cart from backend:', cart);
        //             setCartItems(cart);
        //         } else {
        //             // const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        //             console.log('Setting cart from localStorage:', storedCart);
        //             setCartItems(storedCart);
        //         }
        //     }
        // }
        if (token && cart && cart.length > 0) {
            console.log('Setting cart from backend:', cart);
            setCartItems(cart);
        } else {
            // const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
            console.log('Setting cart from localStorage:', storedCart);
            setCartItems(storedCart);
        }
    }, [cart]);

    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.productId === product.productId);
        let updatedCart;

        if (existingItem) {
            updatedCart = cartItems.map((item) =>
                item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item,
            );
        } else {
            updatedCart = [...cartItems, { ...product, quantity: 1 }];
        }

        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.productId !== productId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const resetCart = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart); // Load lại giỏ hàng từ localStorage (người dùng chưa đăng nhập).
    };

    const refreshCart = () => {
        setCartItems(cart);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        resetCart,
        refreshCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
