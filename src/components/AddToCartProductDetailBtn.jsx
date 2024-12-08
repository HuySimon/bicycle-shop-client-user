import { useState, useContext } from 'react';

import { CartContext } from '@/context/CartContext';
import { useAddCart } from '@/features/cart/useAddCart';

const AddToCartProductDetailBTn = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [isLoading, setLoading] = useState(false);
    const { addCart } = useAddCart();

    const handleAddToCart = async () => {
        setLoading(true);
        const cartItem = {
            productId: product.id,
            productDetailId: product.productDetails[0]?.id,
            size: product.productDetails[0]?.size,
            name: product.name,
            color: product.productDetails[0]?.color,
            price: product.productDetails[0]?.price,
            image: product.productImages[0]?.url,
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
            onClick={handleAddToCart}
            disabled={isLoading}
            className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
        >
            THÊM VÀO GIỎ
        </button>
    );
};
export default AddToCartProductDetailBTn;
