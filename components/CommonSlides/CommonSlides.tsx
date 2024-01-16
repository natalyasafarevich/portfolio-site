'use client';
import {FC} from 'react';
import './CommonSlides.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import {PORTFOLIO_CARDS} from '@/constants/constants';

const CommonSlides: FC = () => {
  const settings = {
    className: 'slider-card',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='slider'>
      <div className='slider__wrap'>
        <Slider {...settings}>
          {PORTFOLIO_CARDS.map((card, i) => {
            return (
              <div className='slider__card' key={i}>
                <PortfolioCard card={card} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CommonSlides;
