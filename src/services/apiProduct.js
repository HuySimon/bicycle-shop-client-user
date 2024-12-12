export async function getAll(Name = '', PageNumber = 0, PageSize = 12) {
    const params = {
        Name: Name ?? '',
        PageNumber: Math.max(PageNumber, 1),
        PageSize,
    };
    const queryString = '?' + new URLSearchParams(params).toString();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Product${queryString}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
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
