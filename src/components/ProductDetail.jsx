import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { CartContext } from '@/context/CartContext';
import { useAddCart } from '@/features/cart/useAddCart';
import Spinner from '@/components/Spinner';
import { useProduct } from '@/features/product/useProduct';
import PageNotFound from '@/views/pages/PageNotFound/PageNotFound';
import AddToCartProductDetailBTn from './AddToCartProductDetailBtn';
import ProductImages from '@/views/pages/Product/ProductImages';
import ProductDetailItem from '@/views/pages/Product/ProductDetailItem';
import { commafy } from '@/utils/helpers';

const ProductDetail = () => {
    const [carouselApi, setCarouselApi] = useState();
    const [selected, setSelected] = useState(null);
    const { isLoading, data, isFetching } = useProduct();
    const { ProductID } = useParams();

    const { addToCart } = useContext(CartContext);
    const { addCart } = useAddCart();

    if (isLoading || isFetching)
        return (
            <div className="flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );

    if (!data || data?.error) {
        return <PageNotFound />;
    }

    const { id, name, productDetails, productImages } = data;

    productDetails.forEach((pd) => {
        const imageIndex = productImages.findIndex((i) => i.productDetailId === pd.id);
        if (imageIndex !== -1) {
            pd.imageIndex = imageIndex;
        }
    });
    console.log(data);

    return (
        <>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <ProductImages images={productImages} setCarouselApi={setCarouselApi} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.name}</h1>

                            <p className="leading-relaxed">{data.description}</p>
                            <div className="flex flex-col mt-6 pb-5 border-b-2 border-gray-200 mb-5">
                                <span className="mb-3">Chọn phân loại</span>
                                <div className="grid grid-cols-3 gap-4">
                                    {productDetails.map((pd) => (
                                        <ProductDetailItem
                                            productDetail={pd}
                                            key={pd.id}
                                            carouselApi={carouselApi}
                                            selected={selected}
                                            setSelected={setSelected}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    {selected?.price ? commafy(selected.price) : commafy(productDetails[0].price)}
                                    &nbsp;₫
                                </span>
                                <AddToCartProductDetailBTn
                                    product={data}
                                    productDetail={{
                                        ...selected,
                                        imageUrl: selected ? data.productImages[selected?.imageIndex].url : null,
                                    }}
                                    disabled={selected === null}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetail;
