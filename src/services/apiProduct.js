export async function getAll(query = '', pageNo = 0) {
    const params = {
        query: query ?? '',
        pageNo,
    };
    const queryString = '?' + new URLSearchParams(params).toString();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Product${queryString}`);
    const data = await res.json();
    return data;
}

export async function getProduct(id) {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Product/${id}`);
        const data = await res.json();
        return data;
    } catch (e) {
        return null;
    }
}
