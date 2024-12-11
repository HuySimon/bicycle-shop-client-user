import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { vnPayPaymentCallback } from '@/services/apiPayment';

export function useVNPayCallback() {
    const [searchParams, setSearchParams] = useSearchParams();
    const params = Object.fromEntries(searchParams.entries());

    const { isLoading, data, isFetching } = useQuery({
        queryKey: ['payment', params],
        queryFn: () => vnPayPaymentCallback(params),
        throwOnError: true,
    });
    return { isLoading, data, isFetching };
}
