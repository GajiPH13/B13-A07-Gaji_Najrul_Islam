import React, { Suspense } from 'react';
import AllFriends from '../../components/HomePage/AllFriends';
import Banner from '../../components/HomePage/Banner';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>

            <Suspense fallback={<p className='text-center'><span className="loading loading-bars loading-xl "></span></p>}>
                <AllFriends></AllFriends>
            </Suspense>
        </div>
    );
};

export default HomePage;