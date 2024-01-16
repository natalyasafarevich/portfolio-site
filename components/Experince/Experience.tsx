'use client';
import {FC} from 'react';
import './Experience.scss';
import {useInView} from 'react-intersection-observer';

const Experience: FC = () => {
  const {ref, inView, entry} = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className='experience' ref={ref}>
      <div className='wrap'>
        <div className='experience__wrap'>
          <p className='experience__title'>
            My Work <span className='highlighting-color'>Experience</span>{' '}
          </p>
          <div className='experience__row'>
            <div className='experience__info'>
              <p className='experience__name'>
                Cognizant, Mumbai
                <span>Sep 2016- July 2020</span>
                <span className='experience__name'>
                  Experince Designer
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lacus nunc, posuere in justo vulputate, bibendum
                    sodales
                  </span>
                </span>
              </p>
              <p className='experience__name'>
                Sugee Pvt limited, Mumbai <span>Sep 2020- July 2023</span>
                <span className='experience__name'>
                  Experince Designer
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lacus nunc, posuere in justo vulputate, bibendum
                    sodales
                  </span>
                </span>
              </p>
            </div>

            {inView && <div className='experience__icon'></div>}
            <div className='experience__info'>
              <p className='experience__name'>
                Experince Designer
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lacus nunc, posuere in justo vulputate, bibendum sodales
                </span>
              </p>
              <p className='experience__name'>
                UI/UX Designer
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  lacus nunc, posuere in justo vulputate, bibendum sodales
                </span>
              </p>
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
};

export default Experience;
