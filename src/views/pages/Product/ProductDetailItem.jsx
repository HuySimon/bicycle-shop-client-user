import { cn } from '@/lib/utils';

function ProductDetailItem({ productDetail, carouselApi, selected, setSelected }) {
    const { id, color, size, imageIndex, quantity } = productDetail;
    const detailStr = size === '' ? color : [size, color].join(' - ');

    function handleClick(e) {
        carouselApi.scrollTo(imageIndex, false);
        setSelected(productDetail);
    }

    return (
        <button
            className={cn(
                'px-3 py-2 border-solid border-[1px] border-slate-200 text-slate-800 rounded-sm disabled:text-slate-500 disabled:bg-slate-100',
                selected?.id === id ? 'bg-slate-400' : 'bg-slate-200',
            )}
            onClick={handleClick}
            disabled={quantity <= 0}
        >
            {detailStr} ({quantity})
        </button>
    );
}

export default ProductDetailItem;
