import React from 'react';
import Hero from '../Hero/Hero';
import ProductPage from '../Products/ProductPage';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white ">
            <Hero />
            <ProductPage />
        </div>
        
    );
};

export default Home;