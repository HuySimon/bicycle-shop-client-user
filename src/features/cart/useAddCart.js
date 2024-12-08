import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
// import { login as loginApi } from "../../services/apiAuth";
import { addCart as addCartApi } from '@/services/apiCart';

export function useAddCart() {
    const queryClient = useQueryClient();

    const { mutate: addCart, Loading } = useMutation({
        mutationFn: (cartItem) => addCartApi(cartItem),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['cart', 'data'] });
        },
        onError: (err) => {
            console.log(err);
            toast.error('Thêm sản phẩm vào giỏ hàng không thành công!');
        },
    });

    return { addCart, Loading };
}
