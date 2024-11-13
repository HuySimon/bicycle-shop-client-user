import { useEffect } from 'react';
import CarouselSlider from '../../../components/CarouselSlider';
import ProductList from '../../../components/ProductList';
const Home = () => {
    useEffect(() => {
        document.title = 'Trang chủ';
    }, []);
    return (
        <>
            {/* Slider */}
            <CarouselSlider />
            <ProductList />
        </>
    );
};

export default Home;
