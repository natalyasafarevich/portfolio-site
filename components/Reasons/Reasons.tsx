'use client';
import {FC} from 'react';
import './Reasons.scss';
import ScrollIntoView from 'react-scroll-into-view';

const Reasons: FC = () => {
  return (
    <div className='reasons' id='about'>
      <div className='reasons__wrap'>
        <div className='wrap'>
          <p className='reasons__title'>
            Why <span className='highlighting-color'>Hire me</span> ?
          </p>
          <p className='reasons__desc'>
            I am a front-end developer with 2 years of practical experience.
            During this time, I have not only deepened my knowledge and skills
            in front-end development but have also actively contributed to
            cross-functional collaboration, ensuring successful project
            delivery. My passion for learning and commitment to continuous
            improvement have allowed me to systematically expand my skill set,
            ensuring consistent growth in web technologies.
          </p>
          <div className='reasons__row'>
            <div className='reasons__info'>
              2 years +<span>Expiriences </span>
            </div>
            <div className='reasons__info'>
              10+
              <span>Project Completed</span>
            </div>
          </div>{' '}
          <ScrollIntoView
            smooth={true}
            selector={`#contact`}
            className={`reasons__button`}
          >
            <a href={`#contact`}>Hire me</a>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
