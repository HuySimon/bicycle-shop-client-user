import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { login as loginApi } from "../../services/apiAuth";
import { updateInfo as updateInfoApi } from '@/services/apiUser';

export function useUpdateInfo() {
    // const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: updateInfo, isLoading } = useMutation({
        mutationFn: ({ userID, name, email, address, phoneNumber }) =>
            updateInfoApi(userID, name, email, address, phoneNumber),
        onSuccess: (data) => {
            toast.success('Cập nhật thông tin thành công!');
            // navigate('/Login', { replace: true });
        },
        onError: (err) => {
            toast.error('Cập nhật thông tin không thành công!');
        },
    });

    return { updateInfo, isLoading };
}
