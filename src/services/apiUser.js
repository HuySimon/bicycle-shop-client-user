export async function updateInfo(userID, name, email, address, phoneNumber) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/User/${userID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            address,
            phoneNumber,
        }),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Cannot update info.');
    }

    return res.json(); // Trả về kết quả nếu thành công
}

export async function updatePassword(userID, currentPassword, newPassword) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/User/changepass/${userID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            currentPassword,
            newPassword,
        }),
    });

    if (!res.ok) {
        const errorData = await res.text();
        throw new Error(errorData.message || 'Cannot change pass.');
    }

    return res.text(); // Trả về kết quả nếu thành công
}
