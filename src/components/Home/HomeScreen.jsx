import React from 'react';
import Banner from './Banner';
const HomeScreen = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="bg-white box-border  w-full">
                <div className="w-[82%] flex  mx-36 "></div>
            </div>
        </div>
    );
};

export default HomeScreen;
