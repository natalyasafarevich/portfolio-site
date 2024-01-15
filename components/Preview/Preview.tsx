'use client';
import {FC, useState} from 'react';
import './Preview.scss';
import {Link} from 'react-scroll';

const Preview: FC = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className='preview' id='preview'>
      <div className='wrap'>
        <div className='preview__wrap'>
          <div className={`preview__greeting ${isShown ? 'hide' : ''}`}>
            <p className='preview__label'>Hello!</p>
            <p className='preview__title'>
              I’m <span>Natallia</span>, <br /> Frontend Developer
            </p>
          </div>
          <div className='preview__row'>
            <p className={`preview__quote ${isShown ? 'active' : ''}`}>
              Jennys Exceptional product design ensure our websites
              success.Highly Recommended
            </p>
            <div
              className='preview__info'
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <div className='preview__box'>
                <Link to={'/'} className='preview__link active'>
                  Portfolio
                </Link>
                <Link to={'/'} className='preview__link'>
                  Hire me
                </Link>
              </div>
            </div>
            <div className={`preview__desc ${isShown ? 'active' : ''}`}>
              2 Years
              <br /> <span>Experince</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
