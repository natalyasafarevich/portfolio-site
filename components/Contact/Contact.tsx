'use client';
import {FC} from 'react';
import './Contact.scss';
import {Link} from 'react-scroll';

const Contact: FC = () => {
  return (
    <div className='contact'>
      <div className='wrap'>
        <div className='contact__wrap'>
          <p className='contact__title'>
            Have an Awesome Project Idea?
            <span className='highlighting-color'> Let’s Discuss</span>
          </p>
          <a
            href='mailto:natalliasafarevich@gmail.com'
            className='contact__label'
          >
            <span>email</span> natalliasafarevich@gmail.com
          </a>
          <a href='tel:48451351357' className='contact__label'>
            <span>phone</span>
            +48 451 251 357
          </a>
          <div className='contact__box'>
            <p className='contact__label'>
              <span>socials</span>
              <div className='contact__row'>
                <a
                  target='_blank'
                  href='https://t.me/mentis_astra'
                  className='contact__icon contact__icon_tg'
                ></a>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/natalya-safarevich/'
                  className='contact__icon contact__icon_ln'
                ></a>
                <a
                  target='_blank'
                  href='https://github.com/natalyasafarevich'
                  className='contact__icon contact__icon_git'
                ></a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
