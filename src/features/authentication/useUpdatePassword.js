import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updatePassword as updatePasswordApi } from '@/services/apiUser';

export function useUpdatePassword() {
    const { mutate: updatePassword, isLoading } = useMutation({
        mutationFn: ({ userID, currentPassword, newPassword }) =>
            updatePasswordApi(userID, currentPassword, newPassword),
        onSuccess: (data) => {
            toast.success('Thay đổi mật khẩu thành công!');
        },
        onError: (err) => {
            if (err === 'Current password is incorrect.') {
                toast.error('Mật khẩu hiện tại không đúng!');
            }
            console.log(err);
            toast.error('Thay đổi mật khẩu không thành công!');
        },
    });

    return { updatePassword, isLoading };
}
