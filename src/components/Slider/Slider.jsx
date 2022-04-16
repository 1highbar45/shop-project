// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import styled from 'styled-components';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Wrapper = styled.div`
    .swiper-pagination-bullet{
        background: #d8d8d8;
        opacity: 1;
        transition: all .3 ease-in
    }
    .swiper-pagination-bullet-active{
        background: #ff6f61;
    }
`

export default function Slider({ spaceBetween = 0, slidesPerView = 1, children }) {
    return (
        <Wrapper>
            <Swiper
                modules={[Pagination]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    React.Children.map(children, (child) => <SwiperSlide>{child}</SwiperSlide>)
                }
            </Swiper>
        </Wrapper>
    );
};

