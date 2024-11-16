import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { login as loginApi } from "../../services/apiAuth";
import { verifyOtp as verifyOtpApi } from '@/services/apiAuth';

export function useVerifyOTP() {
    // const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: verifyOtp, isLoading } = useMutation({
        mutationFn: ({ enteredOtp }) => verifyOtpApi(enteredOtp),
        onSuccess: (data) => {
            navigate('/ChangePassword', { replace: true });
        },
        onError: (err) => {
            toast.error('Xác thực mã OTP không thành công!');
        },
    });

    return { verifyOtp, isLoading };
}
