import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Spinner from '@/components/Spinner';
import InputOTP from '@/components/ui/InputOTP';
import FormRow from '@/components/ui/formrow';
import { useUser } from '@/features/authentication/useUser';
import { useUpdateInfo } from '@/features/authentication/useUpdateInfo';

const Profile = () => {
    useEffect(() => {
        document.title = 'Chỉnh sửa hồ sơ';
    }, []);
    const { register, handleSubmit, formState, watch } = useForm({
        defaultValues: {},
    });
    const { isLoading, user, isFetching } = useUser();
    const { updateInfo, Loading } = useUpdateInfo();
    if (isLoading || isFetching)
        return (
            <div className="flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    const { userID, name, userEmail, address, phoneNumber } = user;
    const { errors } = formState;
    function onSubmit(data) {
        const { name, email, address, phoneNumber } = data;
        updateInfo({ userID, name, email, address, phoneNumber });
    }
    return (
        <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
            <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Hồ sơ cá nhân</h1>
                    </div>

                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">Họ tên</label>
                                    <FormRow error={errors?.name?.message}>
                                        <div className="relative">
                                            <InputOTP
                                                type="text"
                                                name="name"
                                                id="name"
                                                defaultValue={name}
                                                {...register('name', {
                                                    required: 'Vui lòng nhập họ tên của bạn',
                                                })}
                                            />
                                        </div>
                                    </FormRow>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email</label>
                                    <FormRow error={errors?.email?.message}>
                                        <div className="relative">
                                            <InputOTP
                                                type="email"
                                                name="email"
                                                id="email"
                                                defaultValue={userEmail}
                                                {...register('email', {
                                                    required: 'Vui lòng nhập email của bạn',
                                                })}
                                            />
                                        </div>
                                    </FormRow>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">Địa chỉ</label>
                                    <FormRow error={errors?.address?.message}>
                                        <div className="relative">
                                            <InputOTP
                                                type="text"
                                                name="address"
                                                id="address"
                                                defaultValue={address}
                                                {...register('address', {
                                                    required: 'Vui lòng nhập địa chỉ của bạn',
                                                })}
                                            />
                                        </div>
                                    </FormRow>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                                        Số điện thoại
                                    </label>
                                    <FormRow error={errors?.phoneNumber?.message}>
                                        <div className="relative">
                                            <InputOTP
                                                type="number"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                defaultValue={phoneNumber}
                                                {...register('phoneNumber', {
                                                    required: 'Vui lòng nhập số điện thoại của bạn',
                                                })}
                                            />
                                        </div>
                                    </FormRow>
                                </div>
                                <button
                                    type="submit"
                                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Cập nhật
                                </button>
                                <div className="flex justify-between mt-4">
                                    {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                                    Forgot Password ?
                                </span>

                                <a className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                                    Don't have an account yet?
                                </a> */}
                                    <Link to="/" variant="Trở về">
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

export default Profile;
