import Spinner from './Spinner';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useUser } from '@/features/authentication/useUser';
import SheetUserInfo from './SheetUserInfo';

const ButtonLoginLogup = () => {
    const { isLoading, user, isFetching } = useUser();

    if (isLoading || isFetching) {
        return <Spinner />;
    } else if (user == null) {
        return (
            // <NavLink to="/login" title="Đăng nhập">
            //     Đăng nhập
            // </NavLink>
            <div className="flex items-center py-2 -mx-1 md:mx-0">
                <Link
                    className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-gray-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto"
                    to="/Login"
                >
                    Đăng nhập
                </Link>
                <Link
                    className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-0 md:w-auto"
                    to="/SignUp"
                >
                    Tạo Account
                </Link>
            </div>
        );
    } else {
        return <SheetUserInfo />;
    }
};

export default ButtonLoginLogup;
