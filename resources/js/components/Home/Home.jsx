/* Default imports */

// Code...
import {SwiperHome} from '@/components/SwiperHome/SwiperHome.jsx';
import {HomeStyled} from '@/components/Home/Home.styled.js';

export const Home = () => {
    return (
        <HomeStyled>
            <h1>Learn to Cook <span>Tasty Treats'</span> Customizable Masterclass</h1>
            <SwiperHome/>
        </HomeStyled>
    );
};
