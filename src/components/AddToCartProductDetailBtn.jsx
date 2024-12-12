import { useState, useContext } from 'react';

import { CartContext } from '@/context/CartContext';
import { useAddCart } from '@/features/cart/useAddCart';

const AddToCartProductDetailBTn = ({ product, productDetail, disabled }) => {
    const { addToCart } = useContext(CartContext);
    const [isLoading, setLoading] = useState(false);
    const { addCart } = useAddCart();

    const { id: productId, name } = product;

    const handleAddToCart = async () => {
        setLoading(true);
        const cartItem = {
            productId,
            productDetailId: productDetail?.id,
            size: productDetail?.size,
            name,
            color: productDetail?.color,
            price: productDetail?.price,
            image: productDetail?.imageUrl,
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
            disabled={isLoading || disabled}
            className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded disabled:bg-red-300"
        >
            Thêm vào giỏ hàng
        </button>
    );
};
export default AddToCartProductDetailBTn;
