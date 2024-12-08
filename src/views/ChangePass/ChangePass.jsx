import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';

import { useForm } from 'react-hook-form';
import InputOTP from '@/components/ui/InputOTP';
import FormRow from '@/components/ui/formrow';
import { useUser } from '@/features/authentication/useUser';
import { useUpdatePassword } from '@/features/authentication/useUpdatePassword';

const ChangePass = () => {
    useEffect(() => {
        document.title = 'Thay đổi mật khẩu';
    }, []);
    const { register, handleSubmit, formState, watch } = useForm({
        defaultValues: {},
    });
    const { isLoading, user, isFetching } = useUser();
    const { updatePassword } = useUpdatePassword();
    if (isLoading || isFetching)
        return (
            <div className="flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    const { userID } = user;
    console.log(userID);
    const { errors } = formState;
    const newpassword = watch('newPassword');
    function onSubmit(data) {
        const { currentPassword, newPassword } = data;
        updatePassword({ userID, currentPassword, newPassword });
    }
    return (
        <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
            <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Đổi mật khẩu</h1>
                    </div>

                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Mật khẩu hiện tại
                                    </label>
                                    <FormRow error={errors?.currentPassword?.message}>
                                        <div className="relative">
                                            <InputOTP
                                                type="password"
                                                name="currentPassword"
                                                id="currentPassword"
                                                {...register('currentPassword', {
                                                    required: 'Vui lòng nhập mật khẩu hiện tại',
                                                })}
                                            />
                                        </div>
                                    </FormRow>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Mật khẩu mới
                                    </label>
                                    <FormRow error={errors?.newPassword?.message}>
                                        <div className="relative">
                                            <InputOTP
                                                type="password"
                                                name="newPassword"
                                                id="newPassword"
                                                {...register('newPassword', {
                                                    required: 'Vui lòng nhập mật khẩu mới',
                                                })}
                                            />
                                        </div>
                                    </FormRow>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Xác nhận mật khẩu mới
                                    </label>
                                    <FormRow error={errors?.confirmNewPass?.message}>
                                        <div className="relative">
                                            <InputOTP
                                                type="password"
                                                name="confirmNewPass"
                                                id="confirmNewPass"
                                                {...register('confirmNewPass', {
                                                    required: 'Vui lòng xác nhận mật khẩu mới',
                                                    validate: (value) => value === newpassword || 'Mật khẩu không khớp',
                                                })}
                                            />
                                        </div>
                                    </FormRow>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                        Please include a valid email address so we can get back to you
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Lưu lại
                                </button>
                                <div className="flex justify-between mt-4">
                                    <Link to="/Account" variant="Trở về">
                                        Trở Về
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ChangePass;
