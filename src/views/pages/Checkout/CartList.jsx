import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import CartItem from './CartItem';

function CartList({ cartItems }) {
    return (
        <Table className="text-base">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">Tên</TableHead>
                    <TableHead className="text-center">Giá</TableHead>
                    <TableHead className="text-center">Số lượng</TableHead>
                    <TableHead className="text-center">Thành tiền</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {cartItems.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={5} className="table-cell">
                            <span className="flex justify-center">Không có sản phẩm trong giỏ hàng</span>
                        </TableCell>
                    </TableRow>
                ) : (
                    cartItems.map((row) => <CartItem item={row} key={row.productDetailId} />)
                )}
            </TableBody>
        </Table>
    );
}

export default CartList;
