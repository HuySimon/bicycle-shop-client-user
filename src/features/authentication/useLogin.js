import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { login as loginApi } from "../../services/apiAuth";
import { login as loginApi } from '@/services/apiAuth';

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi(email, password),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['user', 'info'] });
            navigate('/', { replace: true });
        },
        onError: (err) => {
            console.log(err);
            toast.error('Tài khoản không tồn tại hoặc mật khẩu không chính xác');
        },
    });

    return { login, isLoading };
}
