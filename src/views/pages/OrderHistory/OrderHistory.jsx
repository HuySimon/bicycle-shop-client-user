import { useEffect } from 'react';
import Spinner from '@/components/Spinner';

import { useOrders } from '@/features/order/useOrders';
import OrderCardList from './OrderCardList';

const OrderHistory = () => {
    useEffect(() => {
        document.title = 'Lịch sử mua hàng';
    }, []);
    const { isLoading, order, isFetching } = useOrders();
    if (isLoading || isFetching)
        return (
            <div className="flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    console.log(order);
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="font-manrope font-extrabold text-3xl lead-10 text-black mb-9">Lịch sử mua hàng</h2>

                {/* <div className="flex sm:flex-col lg:flex-row sm:items-center justify-between">
                    <ul className="flex max-sm:flex-col sm:items-center gap-x-14 gap-y-3">
                        <li className="font-medium text-lg leading-8 cursor-pointer text-indigo-600 transition-all duration-500 hover:text-indigo-600">
                            All Order
                        </li>
                        <li className="font-medium text-lg leading-8 cursor-pointer text-black transition-all duration-500 hover:text-indigo-600">
                            Summary
                        </li>
                        <li className="font-medium text-lg leading-8 cursor-pointer text-black transition-all duration-500 hover:text-indigo-600">
                            Completed
                        </li>
                        <li className="font-medium text-lg leading-8 cursor-pointer text-black transition-all duration-500 hover:text-indigo-600">
                            Cancelled
                        </li>
                    </ul>
                    <div className="flex max-sm:flex-col items-center justify-end gap-2 max-lg:mt-5">
                        <div className="flex rounded-full py-3 px-4 border border-gray-300 relative">
                            <svg
                                className="relative "
                                width="18"
                                height="20"
                                viewBox="0 0 18 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z"
                                    stroke="#111827"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <input
                                type="text"
                                name="from-dt"
                                id="from-dt"
                                className="font-semibold px-2 text-sm text-gray-900 outline-0 appearance-none flex flex-row-reverse cursor-pointer w-28 placeholder-gray-900"
                                placeholder="11-01-2023"
                            />
                        </div>
                        <p className="font-medium text-lg leading-8 text-black">To</p>
                        <div className="flex rounded-full py-3 px-4 border border-gray-300 relative">
                            <svg
                                className="relative "
                                width="18"
                                height="20"
                                viewBox="0 0 18 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z"
                                    stroke="#111827"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <input
                                type="text"
                                name="to-dt"
                                id="to-dt"
                                className="font-semibold px-2 text-sm text-gray-900 outline-0 appearance-none flex flex-row-reverse cursor-pointer w-28 placeholder-gray-900"
                                placeholder="11-01-2023"
                            />
                        </div>
                    </div>
                </div> */}
                {order?.map((o) => (
                    <OrderCardList
                        key={o.id}
                        id={o.id}
                        totalPrice={o.totalPrice}
                        orderDetails={o.orderDetails}
                        statusName={o.statusName}
                        orderDate={o.orderDate}
                    />
                ))}
            </div>
        </section>
    );
};
export default OrderHistory;
