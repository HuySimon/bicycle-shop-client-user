import Spinner from '@/components/Spinner';
import { useVNPayCallback } from '@/features/payment/useVNPayCallback';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

function PaymentRedirect() {
    const { isLoading, data, isFetching } = useVNPayCallback();

    if (isLoading || isFetching) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-50">
                <section className="mx-auto my-0 max-w-6xl px-4 py-5">
                    <div className="flex items-center justify-center">
                        <Spinner size="lg" />
                    </div>
                </section>
            </div>
        );
    }

    if (data?.success) {
        toast.success('Thanh toán đơn hàng thành công');
        return <Navigate to="/" replace={true} />;
    } else {
        toast.error('Có lỗi xảy ra');
    }
}

export default PaymentRedirect;
