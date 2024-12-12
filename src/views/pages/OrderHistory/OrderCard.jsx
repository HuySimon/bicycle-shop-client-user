const OrderCard = ({ id, productDetail, quantity, price }) => {
    const { color, size, product } = productDetail;
    const { name, productImages } = product;
    return (
        <>
            <svg
                className="my-9 w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="1216"
                height="2"
                viewBox="0 0 1216 2"
                fill="none"
            >
                <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>

            <div key={id} className="flex max-lg:flex-col items-center gap-8 lg:gap-24 px-3 md:px-11">
                <div className="grid grid-cols-4 w-full">
                    <div className="col-span-4 sm:col-span-1">
                        <img src={productImages} alt="" className="max-sm:mx-auto object-cover" />
                    </div>
                    <div className="col-span-4 sm:col-span-3 max-sm:mt-4 sm:pl-8 flex flex-col justify-center max-sm:items-center">
                        <h6 className="font-manrope font-semibold text-2xl leading-9 text-black mb-3 whitespace-nowrap">
                            {name}
                        </h6>
                        {/* <p className="font-normal text-lg leading-8 text-gray-500 mb-8 whitespace-nowrap">
                By: Dust Studios
            </p> */}
                        <div className="flex items-center max-sm:flex-col gap-x-10 gap-y-3">
                            <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                                Màu: {color}
                            </span>
                            <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                                Size: {size}
                            </span>
                            <span className="font-normal text-lg leading-8 text-gray-500 whitespace-nowrap">
                                Số lượng: {quantity}
                            </span>
                            <span className="font-semibold text-xl leading-8 text-black whitespace-nowrap">
                                Giá {price?.toLocaleString('vi-VN')} &nbsp;₫
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-around w-full  sm:pl-28 lg:pl-0">
                    {/* <div className="flex flex-col justify-center items-start max-sm:items-center">
            <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
                Trạng thái
            </p>
            <p className="font-semibold text-lg leading-8 text-green-500 text-left whitespace-nowrap">
                Delivered
            </p>
        </div> */}
                    {/* <div className="flex flex-col justify-center items-start max-sm:items-center">
    <p className="font-normal text-lg text-gray-500 leading-8 mb-2 text-left whitespace-nowrap">
        Thanh toán đơn hàng
    </p>
    <p className="font-semibold text-lg leading-8 text-black text-left whitespace-nowrap">
        23rd March 2021
    </p>
</div> */}
                </div>
            </div>
        </>
    );
};

export default OrderCard;
