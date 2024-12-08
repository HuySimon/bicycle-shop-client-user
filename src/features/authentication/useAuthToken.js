import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const useAuthToken = () => {
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');

        if (token) {
            const isValidToken = validateToken(token);

            if (!isValidToken) {
                localStorage.removeItem('jwtToken');
            }
        }
    }, []);

    const validateToken = (token) => {
        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000; // Thời gian hiện tại tính bằng giây

            if (decoded.exp < currentTime) {
                return false;
            }
            return true;
        } catch (error) {
            console.error('Invalid token:', error);
            return false;
        }
    };
};

export default useAuthToken;
