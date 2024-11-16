import React from 'react';

const InputOTP = React.forwardRef(({ ...props }, ref) => (
    <input
        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
        {...props}
        ref={ref}
    />
));
InputOTP.displayName = 'InputOTP';

export default InputOTP;
