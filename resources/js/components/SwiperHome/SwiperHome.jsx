import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/scss';
import style from './Swiper.module.scss';
import slide_1_1 from '../../img/slide1/1.jpeg';
import slide_1_2 from '../../img/slide1/2.jpeg';
import slide_1_3 from '../../img/slide1/3.jpeg';

import slide_2_1 from '../../img/slide2/2-1.jpeg';
import slide_2_2 from '../../img/slide2/2-2.jpeg';
import slide_2_3 from '../../img/slide2/2-3.jpeg';

import slide_3_1 from '../../img/slide3/3-1.jpeg';
import slide_3_2 from '../../img/slide3/3-2.jpeg';
import slide_3_3 from '../../img/slide3/3-3.jpeg';


export const SwiperHome = () => {
    return (
        <Swiper
            className={style.swiper}
            modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
        >
            <SwiperSlide className={style.slide1}>
                <img src={slide_1_1}
                     alt=""/>
                <img src={slide_1_2}
                     alt=""/>
                <img src={slide_1_3}
                     alt=""/>

            </SwiperSlide>

            <SwiperSlide className={style.slide1}>
                <img src={slide_2_1}
                     alt=""/>
                <img src={slide_2_2}
                     alt=""/>
                <img src={slide_2_3}
                     alt=""/>

            </SwiperSlide>

            <SwiperSlide className={style.slide1}>
                <img src={slide_3_1}
                     alt=""/>
                <img src={slide_3_2}
                     alt=""/>
                <img src={slide_3_3}
                     alt=""/>

            </SwiperSlide>


        </Swiper>

    );
};
