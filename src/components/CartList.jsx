import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Spinner from '@/components/Spinner';

import { useCarts } from '@/features/cart/useCarts';
import Cart from './Cart';

const CartList = () => {
    const { isLoading, data: carts, isFetching } = useCarts();
    if (isLoading || isFetching)
        return (
            <div className="flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    const { content } = carts;
    console.log(content);

    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                            3
                        </span>
                    </div>
                    {/* <span className="text-sm font-medium">Giỏ Hàng</span> */}
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Giỏ hàng</SheetTitle>
                    <SheetDescription>
                        {/* <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
                            <div className="col-span-12 lg:col-span-2 img box">
                                <img
                                    src="https://pagedone.io/asset/uploads/1701162826.png"
                                    alt="speaker image"
                                    className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                                />
                            </div>
                            <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                                <div className="flex items-center justify-between w-full mb-4">
                                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                                        Round white portable speaker
                                    </h5>
                                    <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                                        <svg
                                            width="34"
                                            height="34"
                                            viewBox="0 0 34 34"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                                                cx="17"
                                                cy="17"
                                                r="17"
                                                fill=""
                                            />
                                            <path
                                                className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                                                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                                stroke="#EF4444"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                                    Introducing our sleek round white portable speaker, the epitome of style and sound!
                                    Elevate your auditory experience with this compact yet powerful device that delivers
                                    crystal-clear audio wherever you go.{' '}
                                    <a href="javascript:;" className="text-indigo-600">
                                        More....
                                    </a>
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                            <svg
                                                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                width="18"
                                                height="19"
                                                viewBox="0 0 18 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.5 9.5H13.5"
                                                    stroke=""
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                        <input
                                            type="text"
                                            id="number"
                                            className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                                            placeholder="2"
                                        />
                                        <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                            <svg
                                                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                                width="18"
                                                height="19"
                                                viewBox="0 0 18 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.75 9.5H14.25M9 14.75V4.25"
                                                    stroke=""
                                                    strokeWidth="1.6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                                        $220
                                    </h6>
                                </div>
                            </div>
                        </div> */}
                        {content?.map(
                            (cart) => (
                                console.log(cart),
                                (
                                    <Cart
                                        cart={cart}
                                        key={cart.productDetailId}
                                        name={cart.name}
                                        id={cart.productDetailId}
                                        price={cart.productDetail.price}
                                        isLoading={isLoading}
                                        isFetching={isFetching}
                                    />
                                )
                            ),
                        )}
                        {/* <Cart /> */}
                    </SheetDescription>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default CartList;
