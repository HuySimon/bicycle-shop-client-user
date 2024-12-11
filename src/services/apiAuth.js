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

export async function logup(email, fullName, address, phoneNumber, password) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Auth/register`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            fullName,
            address,
            phoneNumber,
            password,
        }),
    });
    if (res.status === 401) {
        throw new Error('Register failed');
    }
    const data = await res.text();
    if (data.status === 400) {
        return null;
    }

    return data;
}

export async function getUserInfo() {
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

export async function logout() {
    const token = localStorage.getItem('jwtToken');
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        localStorage.removeItem('jwtToken');
        const data = await res.text();
        return data;
    } catch (error) {
        console.error('Error during logout:', error);
    } finally {
        localStorage.removeItem('jwtToken');
    }
}

export async function SendOTP(email) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Auth/request-otp`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
    });

    if (!res.ok) {
        throw new Error('Failed to send OTP');
    }

    const data = await res.json();
    localStorage.setItem('otpToken', data.otpToken);
    const ExpirationTime = new Date(data.expirationTime);
    localStorage.setItem('expirationTime', ExpirationTime.toISOString());
    return data;
}

export async function verifyOtp(enteredOtp) {
    const otpToken = localStorage.getItem('otpToken');
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Auth/verify-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            otpToken,
            enteredOtp,
        }),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'OTP verification failed.');
    }

    return res.text(); // Trả về kết quả nếu thành công
}

export async function changePassword(email, newPassword) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/User/change-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            newPassword,
        }),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Cannot change password.');
    }

    return res.text(); // Trả về kết quả nếu thành công
}
