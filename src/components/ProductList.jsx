import Spinner from '@/components/Spinner';

import ProductCard from './ProductCard';
import { useProducts } from '@/features/product/useProducts';
import SearchBar from './ui/searchBar';
import PaginationGroup from './ui/PaginationGroup';

const ProductList = () => {
    const { isLoading, data: products, isFetching } = useProducts();

    if (isLoading || isFetching)
        return (
            <div className="flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    const { content } = products;

    return (
        <>
            {/* <div className="container mx-auto py-8 "> */}
            <div tabIndex="0" className="focus:outline-none">
                {/* <!-- Remove py-8 --> */}
                <SearchBar
                    queryParamKey="query"
                    pageParamKey="page"
                    inputPlaceholder="Tìm kiếm xe đạp..."
                    isLoading={isLoading || isFetching}
                />
                <div className="mx-auto container py-8 max-w-7xl">
                    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                        {/* <!-- Card 1 --> */}
                        {content?.map(
                            (product) => (
                                console.log(product.productImages[0]?.url),
                                (
                                    <ProductCard
                                        product={product}
                                        key={product.id}
                                        name={product.name}
                                        id={product.id}
                                        price={product.productDetails[0]?.price}
                                        image={product.productImages[0]?.url}
                                    />
                                )
                            ),
                        )}
                    </div>
                </div>
                <PaginationGroup pageInfo={products} />
                {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
            </div>
            {/* </div> */}
        </>
    );
};

export default ProductList;
