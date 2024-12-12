import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getVNPayPaymentUrl } from '@/services/apiPayment';
import { useNavigate } from 'react-router-dom';

export function useVNPayPaymentUrl() {
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: (orderInfo) => getVNPayPaymentUrl(orderInfo),
        onSuccess: (url) => {
            window.location.replace(url);
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { mutate, isPending };
}
