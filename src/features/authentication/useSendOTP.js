import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { login as loginApi } from "../../services/apiAuth";
import { SendOTP as SendOTPApi } from '@/services/apiAuth';

export function useSendOTP() {
    // const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: SendOTP, isLoading } = useMutation({
        mutationFn: ({ email }) => SendOTPApi(email),
        onSuccess: (data) => {
            // queryClient.invalidateQueries({ queryKey: ['user', 'info'] });
            navigate('/OTP', { replace: true });
        },
        onError: (err) => {
            console.log(err);
            toast.error('Gửi mã OTP không thành công!');
        },
    });

    return { SendOTP, isLoading };
}
