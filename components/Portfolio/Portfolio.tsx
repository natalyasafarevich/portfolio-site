'use client';
import {FC} from 'react';
import './Portfolio.scss';

// import Slider from 'react-slick';

import CommonSlides from '../CommonSlides/CommonSlides';

const Portfolio: FC = () => {
  return (
    <div className='portfolio'>
      <div className='wrap'>
        <div className='portfolio__wrap'>
          <p className='portfolio__title'>
            Lets have a look at my{' '}
            <span className='highlighting-color'>Portfolio</span>{' '}
          </p>
          <div className='portfolio__slider'>
            <CommonSlides />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
