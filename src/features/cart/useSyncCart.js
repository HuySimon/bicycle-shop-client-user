import { useQuery } from '@tanstack/react-query';
import { syncAndGetAllCart } from '../../services/apiCart';

export function useSyncCart() {
    const {
        isLoading,
        data: cart,
        isFetching,
    } = useQuery({
        queryKey: ['cart', 'data'],
        queryFn: syncAndGetAllCart,
    });
    return {
        isLoading,
        cart,
        isFetching,
    };
}
