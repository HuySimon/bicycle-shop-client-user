import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/services/apiProduct';

export function useProduct() {
    const { ProductID } = useParams();
    const { isLoading, data, isFetching } = useQuery({
        queryKey: ['product', Number(ProductID)],
        queryFn: () => getProduct(ProductID),
        throwOnError: true,
    });
    return { isLoading, data, isFetching };
}
