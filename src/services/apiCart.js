export async function getAll(query = '', pageNo = 0) {
    const params = {
        query: query ?? '',
        pageNo,
    };
    const queryString = '?' + new URLSearchParams(params).toString();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Carts${queryString}`);
    const data = await res.json();
    return data;
}

export async function syncAndGetAllCart() {
    const carts = JSON.parse(localStorage.getItem('cart')) || [];
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        throw new Error('User is not logged in.');
    }
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Carts/sync-and-get`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(carts),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Đồng bộ giỏ hàng không thành công!');
    }

    const updatedCart = await res.json();
    console.log('Updated cart:', updatedCart);

    localStorage.removeItem('cart'); // Xóa local cart sau khi đồng bộ
    return updatedCart;
}

export async function addCart(cartItem) {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        throw new Error('User is not logged in.');
    }
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Carts/addCart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cartItem),
    });

    if (!res.ok) {
        throw new Error('Thêm sản phẩm vào giỏ hàng thành công!');
    }

    const data = await res.text();

    return data;
}

export async function deleteCart(productDetailId) {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        throw new Error('User is not logged in.');
    }
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Carts/delete/${productDetailId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await res.text();
    return data;
}
