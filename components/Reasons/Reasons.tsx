import {FC} from 'react';
import './Reasons.scss';

const Reasons: FC = () => {
  return (
    <div className='reasons'>
      <div className='reasons__wrap'>
        <div className='wrap'>
          <p className='reasons__title'>
            Why <span className='highlighting-color'>Hire me</span> ?
          </p>
          <p className='reasons__desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
          <div className='reasons__row'>
            <div className='reasons__info'>
              450+
              <span>Project Completed</span>
            </div>
            <div className='reasons__info'>
              450+
              <span>Project Completed</span>
            </div>
          </div>
          <button className='reasons__button'>Hire me</button>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
