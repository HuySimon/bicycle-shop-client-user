import OrderCard from './OrderCard';

const OrderCardList = ({ totalPrice, orderDetails, statusName, orderDate }) => {
    // const dateString = orderDate;
    const date = new Date(orderDate);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${date.getFullYear()}`;
    return (
        <div className="mt-7 border border-gray-300 pt-9">
            <div className="flex max-md:flex-col items-center justify-between px-3 md:px-11">
                <div className="data">
                    {/* <p className="font-medium text-lg leading-8 text-black whitespace-nowrap">
                Order : #10234987
            </p> */}
                    <p className="font-medium text-lg leading-8 text-black mt-3 whitespace-nowrap">
                        Order Payment : {formattedDate}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start max-sm:items-center">
                    <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                        Trạng thái
                    </p>
                    <p className="font-semibold text-lg leading-8 text-green-500 text-left whitespace-nowrap">
                        {statusName}
                    </p>
                </div>
                {/* <div className="flex items-center gap-3 max-md:mt-5">
            <button className="rounded-full px-7 py-3 bg-white text-gray-900 border border-gray-300 font-semibold text-sm shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-400">
                Show Invoice
            </button>
            <button className="rounded-full px-7 py-3 bg-indigo-600 shadow-sm shadow-transparent text-white font-semibold text-sm transition-all duration-500 hover:shadow-indigo-400 hover:bg-indigo-700">
                Buy Now
            </button>
        </div> */}
            </div>

            {orderDetails?.map((o) => (
                <OrderCard key={o.id} quantity={o.quantity} price={o.price} />
            ))}

            {/* <svg
                className="my-9 w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="1216"
                height="2"
                viewBox="0 0 1216 2"
                fill="none"
            >
                <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg> */}

            {/* <div className="flex max-lg:flex-col items-center gap-8 lg:gap-24 px-3 md:px-11">
                <div className="grid grid-cols-4 w-full">
                    <div className="col-span-4 sm:col-span-1">
                        <img
                            src="https://pagedone.io/asset/uploads/1705474672.png"
                            alt=""
                            className="max-sm:mx-auto object-cover"
                        />
                    </div>
                    <div className="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                        <h6 className="font-manrope font-semibold text-2xl leading-9 text-black mb-3 whitespace-nowrap">
                            Decoration’s Item
                        </h6>
                        <p className="font-normal text-lg leading-8 text-gray-500 mb-8 whitespace-nowrap">
                            By: Dust Studios
                        </p>
                        <div className="flex items-center max-sm:flex-col gap-x-10 gap-y-3">
                            <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                                Size: s
                            </span>
                            <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                                Qty: 1
                            </span>
                            <p className="font-semibold text-xl leading-8 text-black whitespace-nowrap">Price $80.00</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-around w-full sm:pl-28 lg:pl-0">
                    <div className="flex flex-col justify-center items-start max-sm:items-center">
                        <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                            Status
                        </p>
                        <p className="font-semibold text-lg leading-8 text-red-500 text-left whitespace-nowrap">
                            Cancelled
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start max-sm:items-center">
                        <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                            Delivery Expected by
                        </p>
                        <p className="font-semibold text-lg leading-8 text-black text-left whitespace-nowrap">
                            23rd March 2021
                        </p>
                    </div>
                </div>
            </div> */}
            <svg
                className="mt-9 w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="1216"
                height="2"
                viewBox="0 0 1216 2"
                fill="none"
            >
                <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>

            <div className="px-3 md:px-11 flex items-center justify-between max-sm:flex-col-reverse">
                <div className="flex max-sm:flex-col-reverse items-center">
                    {/* <button className="flex items-center gap-3 py-10 pr-8 sm:border-r border-gray-300 font-normal text-xl leading-8 text-gray-500 group transition-all duration-500 hover:text-indigo-600">
                <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="stroke-gray-600 transition-all duration-500 group-hover:stroke-indigo-600"
                        d="M14.0261 14.7259L25.5755 26.2753M14.0261 26.2753L25.5755 14.7259"
                        stroke=""
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                cancel order
            </button> */}
                    <p className="font-normal text-xl leading-8 text-gray-500 sm:pl-8">Thanh toán thành công</p>
                </div>
                <span className="font-medium text-xl leading-8 text-black max-sm:py-4">
                    {' '}
                    <span className="text-gray-500">Tổng: </span> &nbsp;{totalPrice?.toLocaleString('vi-VN')} &nbsp;₫
                </span>
            </div>
        </div>
    );
};

export default OrderCardList;
