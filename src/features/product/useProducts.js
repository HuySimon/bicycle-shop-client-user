import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getAll } from '@/services/apiProduct';

export function useProducts() {
    const [searchParams] = useSearchParams();

    const pageNoParam = Number.parseInt(searchParams.get('page'));
    const pageNo = pageNoParam ? pageNoParam - 1 : 0;

    const query = searchParams.get('query') ?? '';

    const { isLoading, data, isFetching } = useQuery({
        queryKey: ['products', query, pageNo],
        queryFn: () => getAll(query, pageNo),
        throwOnError: true,
    });
    return { isLoading, data, isFetching };
}