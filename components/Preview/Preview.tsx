'use client';
import {FC, useState} from 'react';
import './Preview.scss';
import ScrollIntoView from 'react-scroll-into-view';

const Preview: FC = () => {
  const [isShown, setIsShown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMainActive, setIsMainActive] = useState(true);
  let windowSize = typeof window !== 'undefined' ? window.innerWidth : 0;

  const handelMouseEnter = () => {
    setIsShown(true);
    if (windowSize <= 991) {
      setIsShown(false);
    }
  };
  return (
    <div className='preview' id='home'>
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
              Through hardships to the stars
            </p>
            <div
              className='preview__info'
              onMouseEnter={handelMouseEnter}
              onMouseLeave={() => setIsShown(false)}
            >
              <div className='preview__box'>
                <a
                  href={
                    'https://drive.google.com/file/d/1Z3TI70r5UrqKVt2i6yUW6UQYAW3T9PeQ/view?usp=sharing'
                  }
                  target='_blank'
                  className={`preview__link  ${isMainActive ? 'active' : ''}`}
                >
                  CV
                </a>
                <ScrollIntoView smooth={true} selector={`#contact`}>
                  <a
                    href={`#contact`}
                    className={`preview__link ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => {
                      setIsActive(true);
                      setIsMainActive(false);
                    }}
                    onMouseLeave={() => {
                      setIsActive(false);
                      setIsMainActive(true);
                    }}
                  >
                    Hire me
                  </a>
                </ScrollIntoView>
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
