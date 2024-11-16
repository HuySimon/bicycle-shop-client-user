import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import InputOTP from '@/components/ui/InputOTP';
import FormRow from '@/components/ui/formrow';
import { useChangePassword } from '@/features/authentication/useChangePassword';

const ChangePassword = () => {
    useEffect(() => {
        document.title = 'Đổi mật khẩu';
    }, []);
    const { register, handleSubmit, formState, watch } = useForm({
        defaultValues: {},
    });
    const { errors } = formState;
    const newpassword = watch('newPassword');
    const { changePassword, isLoading } = useChangePassword();
    function onSubmit(data) {
        const { email, newPassword } = data;
        changePassword({ email, newPassword });
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
                                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email</label>
                                    <FormRow error={errors?.email?.message}>
                                        <div className="relative">
                                            <InputOTP
                                                type="email"
                                                name="email"
                                                id="email"
                                                {...register('email', {
                                                    required: 'Vui lòng nhập email của bạn',
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
                                    Đổi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ChangePassword;
