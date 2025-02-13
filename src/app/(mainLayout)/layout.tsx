import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import React from 'react';

const MainLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <Header />
            <div className="min-h-screen">{children}</div>
            <Footer />
        </>
    );
};

export default MainLayout;