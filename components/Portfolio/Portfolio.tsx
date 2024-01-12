'use client';
import {FC} from 'react';
import './Portfolio.scss';

// import Slider from 'react-slick';

import CommonSlides from '../CommonSlides/CommonSlides';
import {LABELS_PORTFOLIO} from '@/constants/constants';
import RunningText from '../RunningText/RunningText';

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
          <div className='portfolio__row'>
            {LABELS_PORTFOLIO.map((label, i) => (
              <div key={i} className='portfolio__label'>
                {label.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <RunningText />
    </div>
  );
};

export default Portfolio;
