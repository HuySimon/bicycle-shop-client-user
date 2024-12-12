import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ImageItem from '@/components/ui/ImageItem';

function ProductImages({ images, setCarouselApi }) {
    return (
        <div className="lg:w-2/5 mx-auto flex h-full w-4/5 items-center justify-center">
            {images.length === 0 ? (
                <span>Chưa có hình ảnh</span>
            ) : (
                <Carousel setApi={setCarouselApi}>
                    <CarouselContent>
                        {images.map((image) => (
                            <CarouselItem key={image.id}>
                                <ImageItem image={image} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            )}
        </div>
    );
}

export default ProductImages;
