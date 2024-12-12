import { TableCell, TableRow } from '@/components/ui/table';
import { useDeleteCart } from '@/features/cart/useDeleteCart';
import { commafy } from '@/utils/helpers';
import { TrashIcon } from '@heroicons/react/24/outline';
function CartItem({ item }) {
    const { color, image, name, price, quantity, size, productDetailId } = item;
    const { deleteCart } = useDeleteCart();

    const detailStr = size === '' ? color : [size, color].join(' - ');

    const handleDelete = async (productDetailId) => {
        try {
            await deleteCart(productDetailId);
        } catch (error) {
            console.error('Error delete product to cart on server:', error);
        }
    };

    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center gap-4">
                    {image ? (
                        <img src={image} alt="Sản phẩm" className="w-16 h-16 object-cover object-center" />
                    ) : (
                        <img src="/placeholder.svg" className="h-16 w-16 object-cover object-center" alt={detailStr} />
                    )}
                    <div>
                        <p>{name}</p>
                        <p>Phân loại: {detailStr}</p>
                    </div>
                </div>
            </TableCell>
            <TableCell className="text-right">{`${commafy(price)} đ`}</TableCell>
            <TableCell className="text-right">{quantity}</TableCell>
            <TableCell className="text-right">{`${commafy(price * quantity)} đ`}</TableCell>
            <TableCell>
                <div className="flex justify-center items-center">
                    <button
                        type="button"
                        onClick={() => handleDelete(productDetailId)}
                        className="font-medium opacity-50 hover:opacity-100 transition-opacity duration-200"
                    >
                        <TrashIcon className="w-6 h-6" />
                    </button>
                </div>
            </TableCell>
        </TableRow>
    );
}

export default CartItem;
