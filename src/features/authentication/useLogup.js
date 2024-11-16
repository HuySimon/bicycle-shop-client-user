import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { login as loginApi } from "../../services/apiAuth";
import { logup as logupApi } from '@/services/apiAuth';

export function useLogup() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: logup, isLoading } = useMutation({
        mutationFn: ({ email, fullName, address, phoneNumber, password }) =>
            logupApi(email, fullName, address, phoneNumber, password),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['user', 'info'] });
            navigate('/Login', { replace: true });
        },
        onError: (err) => {
            console.log(err);
            toast.error('Đăng ký tài khoản không thành công!');
        },
    });

    return { logup, isLoading };
}
