export async function getOrderHistory() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        throw new Error('User is not logged in.');
    }
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Order/user-orders`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    if (data.status === 400) {
        return null;
    }
    return data;
}
