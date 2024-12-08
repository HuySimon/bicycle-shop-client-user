import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
// import { login as loginApi } from "../../services/apiAuth";
import { deleteCart as deleteCartApi } from '@/services/apiCart';

export function useDeleteCart() {
    const queryClient = useQueryClient();

    const { mutate: deleteCart, isLoading } = useMutation({
        mutationFn: (productDetailId) => deleteCartApi(productDetailId),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['cart', 'data'] });
        },
        onError: (err) => {
            console.log(err);
            toast.error('Delete sản phẩm vào giỏ hàng không thành công!');
        },
    });

    return { deleteCart, isLoading };
}
