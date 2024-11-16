import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useVerifyOTP } from '@/features/authentication/useVerifyOTP';
import InputOTP from '@/components/ui/InputOTP';
import FormRow from '@/components/ui/formrow';

const OTP = () => {
    useEffect(() => {
        document.title = 'Xác thực mã OTP';
    }, []);
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {},
    });
    const { verifyOtp, isLoading } = useVerifyOTP();
    const { errors } = formState;
    const [timeLeft, setTimeLeft] = useState(0); // Lưu thời gian còn lại
    function onSubmit(data) {
        const { enteredOtp } = data;
        verifyOtp({ enteredOtp });
    }

    useEffect(() => {
        const expirationTime = localStorage.getItem('expirationTime');

        if (expirationTime) {
            const expirationDate = new Date(expirationTime);
            const intervalId = setInterval(() => {
                const currentTime = new Date();
                const timeDifference = expirationDate - currentTime; // Tính thời gian còn lại
                if (timeDifference <= 0) {
                    clearInterval(intervalId); // Dừng đếm ngược khi hết thời gian
                    setTimeLeft(0);
                } else {
                    setTimeLeft(Math.floor(timeDifference / 1000)); // Cập nhật timeLeft (tính bằng giây)
                }
            }, 1000); // Cập nhật mỗi giây

            // Dọn dẹp khi component bị unmount
            return () => clearInterval(intervalId);
        }
    }, []);
    return (
        <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
            <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Xác thực OTP</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Vui lòng nhập mã OTP chúng tôi đã gửi qua email của bạn
                            {/* <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">
                                Login here
                            </a> */}
                        </p>
                    </div>

                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                                    >
                                        {timeLeft > 0
                                            ? `Thời gian hiệu lực OTP còn: ${timeLeft} s`
                                            : `Mã OTP đã hết hiệu lực`}
                                    </label>
                                    <FormRow error={errors?.enteredOtp?.message}>
                                        <div className="relative">
                                            {/* <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                            required
                                            aria-describedby="email-error"
                                        /> */}
                                            <InputOTP
                                                type="number"
                                                name="enteredOtp"
                                                id="enteredOtp"
                                                placeholder="OTP"
                                                {...register('enteredOtp', {
                                                    required: 'Vui lòng nhập mã OTP của bạn',
                                                })}
                                            />
                                        </div>
                                    </FormRow>
                                    {/* <div className="relative">
                                        <input
                                            type="number"
                                            id="email"
                                            name="email"
                                            className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                            required
                                            aria-describedby="email-error"
                                        />
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                        Please include a valid email address so we can get back to you
                                    </p> */}
                                </div>
                                <button
                                    type="submit"
                                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Xác thực
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
                <a
                    className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
                    href="#"
                    target="_blank"
                >
                    <svg
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View Github
                </a>
                <a
                    className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
                    href="#"
                >
                    Contact us!
                </a>
            </p> */}
        </main>
    );
};

export default OTP;
