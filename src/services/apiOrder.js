export async function createOrder(orderInfo) {
    console.log(orderInfo);
    console.log(JSON.stringify(orderInfo));
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/order/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderInfo),
        });
        const data = await res.json();
        return data;
    } catch (e) {
        throw new Error(e.message);
    }
}
