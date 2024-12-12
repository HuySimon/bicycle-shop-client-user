import FormRow from '@/components/ui/formrow';
import Input from '@/components/ui/input';
import { CartContext } from '@/context/CartContext';
import { useVNPayPaymentUrl } from '@/features/payment/useVNPayPaymentUrl';
import { commafy } from '@/utils/helpers';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

function DeliveryInfoForm({ user }) {
    const { userID, address, phoneNumber } = user;
    const { cartItems } = useContext(CartContext);
    const { mutate, isPending } = useVNPayPaymentUrl();
    const { register, handleSubmit, formState } = useForm({
        defaultValues: { address, phoneNumber },
    });
    const { errors } = formState;

    const cartTotalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    function onSubmit(data) {
        const { address, phoneNumber } = data;
        const requestData = {
            userId: userID,
            address,
            phoneNumber,
            orderDetail: cartItems.map((item) => {
                return { productDetailId: item.productDetailId, quantity: item.quantity };
            }),
        };
        mutate(requestData);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 min-w-96">
            <h2 className="text-lg font-bold">Thông tin nhận hàng</h2>
            <FormRow label="Địa chỉ" error={errors?.address?.message}>
                <Input
                    type="text"
                    name="address"
                    id="address"
                    {...register('address', {
                        required: 'Địa chỉ không được để trống',
                    })}
                    className="rounded-md border-[1px] border-solid border-slate-300 bg-inherit px-2 py-1.5 text-slate-800 focus:outline focus:outline-2 focus:outline-slate-500 disabled:bg-slate-200 w-full"
                    disabled={isPending}
                />
            </FormRow>
            <FormRow label="Số điện thoại" error={errors?.phoneNumber?.message}>
                <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    {...register('phoneNumber', {
                        required: 'Số điện thoại không được để trống',
                        pattern: {
                            value: /^0\d{9,11}$/,
                            message: 'Số điện thoại không hợp lệ',
                        },
                    })}
                    className="rounded-md border-[1px] border-solid border-slate-300 bg-inherit px-2 py-1.5 text-slate-800 focus:outline focus:outline-2 focus:outline-slate-500 disabled:bg-slate-200 w-full"
                    disabled={isPending}
                />
            </FormRow>
            <div className="flex flex-col gap-2">
                <span className="font-semibold">Số tiền</span>
                <span>{commafy(cartTotalPrice)} đ</span>
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="flex items-center gap-x-2 rounded-md border-[1px] border-solid border-slate-300 bg-white px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
                    disabled={cartTotalPrice === 0 || isPending}
                >
                    <span>Tiếp tục với VNPay</span>
                </button>
            </div>
        </form>
    );
}

export default DeliveryInfoForm;
