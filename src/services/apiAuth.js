import { parseJwt } from '@/utils/helpers';

export async function login(email, password) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    if (res.status === 401) {
        throw new Error('Login failed');
    }
    const data = await res.json();
    const { accessToken } = data;

    if (data.accessToken) {
        localStorage.setItem('jwtToken', accessToken);
        return parseJwt(accessToken);
    } else {
        throw new Error('Login failed');
    }
}

export async function getUserInfo() {
    // Lấy token JWT từ localStorage hoặc cookie, nơi lưu token sau khi người dùng đăng nhập thành công
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        throw new Error('User is not logged in.');
    }
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Auth/userinfo`, {
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

export async function logup(username, password) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/Api/logup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });
    if (res.status === 401) {
        throw new Error('Login failed');
    }
    const data = await res.json();
    const { accessToken } = data;

    if (data.accessToken) {
        return parseJwt(accessToken);
    } else {
        throw new Error('Login failed');
    }
}
