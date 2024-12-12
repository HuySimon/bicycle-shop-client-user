import { useQuery } from '@tanstack/react-query';
import { getOrderHistory } from '../../services/apiOrder';

export function useOrders() {
    const {
        isLoading,
        data: order,
        isFetching,
    } = useQuery({
        queryKey: ['order', 'data'],
        queryFn: getOrderHistory,
    });
    return {
        isLoading,
        order,
        isFetching,
    };
}
