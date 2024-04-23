import React, { FC } from 'react';
import '../assets/styles/reset.css';
import '../assets/styles/main.css';
import '../assets/fonts/Montserrat.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Benefits from './main/BenefitsSection/BenefitsSection';
import CountdownTimer from './main/CountdownTimer/CountdownTimer';
import Button from './main/Button/Button';
import ProductsCount from './main/ProductsCount/ProductsCount';

const MainSection: FC = () => {
    return (
        <>
            <Header />
            <Benefits />
            <CountdownTimer />
            <Button />
            <ProductsCount />
            {/* <Footer /> */}
        </>
    );
};

export default MainSection;
