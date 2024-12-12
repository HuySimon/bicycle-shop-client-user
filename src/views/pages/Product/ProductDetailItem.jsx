import { cn } from '@/lib/utils';

function ProductDetailItem({ productDetail, carouselApi, selected, setSelected }) {
    const { id, color, size, imageIndex } = productDetail;
    const detailStr = size === '' ? color : [size, color].join(' - ');

    function handleClick(e) {
        carouselApi.scrollTo(imageIndex, false);
        setSelected(productDetail);
    }

    return (
        <button
            className={cn(
                'px-3 py-2 border-solid border-[1px] border-slate-200text-slate-800 rounded-sm',
                selected?.id === id ? 'bg-slate-300' : 'bg-slate-100',
            )}
            onClick={handleClick}
        >
            {detailStr}
        </button>
    );
}

export default ProductDetailItem;
