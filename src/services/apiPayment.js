import { createOrder } from './apiOrder';

export async function getVNPayPaymentUrl(orderInfo) {
    try {
        const order = await createOrder(orderInfo);

        if (!order) {
            throw new Error('Error creating new order');
        }

        const { id, totalPrice } = order;

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/payment/vnpay/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                orderType: 'order',
                amount: totalPrice,
                orderDescription: `${id}`,
                name: '',
            }),
        });
        const data = await res.text();
        return data;
    } catch (e) {
        throw new Error(e.message);
    }
}

export async function vnPayPaymentCallback(params) {
    console.log(params);
    try {
        const queryString = '?' + new URLSearchParams(params).toString();
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/payment/vnpay/callback${queryString}`);
        const data = await res.json();
        return data;
    } catch (e) {
        throw new Error(e.message);
    }
}
