import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { login as loginApi } from "../../services/apiAuth";
import { changePassword as changePasswordApi } from '@/services/apiAuth';

export function useChangePassword() {
    // const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: changePassword, isLoading } = useMutation({
        mutationFn: ({ email, newPassword }) => changePasswordApi(email, newPassword),
        onSuccess: (data) => {
            navigate('/Login', { replace: true });
        },
        onError: (err) => {
            toast.error('Thay đổi mật khẩu không thành công!');
        },
    });

    return { changePassword, isLoading };
}
