'use client';
import {FC, useState} from 'react';
import './Footer.scss';
import {HEADER_LINKS} from '@/constants/constants';
import ScrollIntoView from 'react-scroll-into-view';

const Footer: FC = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (id: any) => {
    setActiveLink(id);
  };
  return (
    <footer className='footer'>
      <div className='footer__wrap'>
        <div className='wrap'>
          <div className='footer__title'>
            <p>Lets Connect there</p>
            <button className='footer__button'>Hire me</button>
          </div>
          <div className='footer__row'>
            <div className='footer__info'>
              <p className='footer__desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed lobortis orci elementum egestas
                lobortis.
              </p>
              <div className='footer__box'>
                <a
                  href='https://t.me/mentis_astra'
                  className='footer__icon footer__icon_tg'
                ></a>
                <a
                  href='https://www.linkedin.com/in/natalya-safarevich/'
                  className='footer__icon footer__icon_ln'
                ></a>{' '}
                <a
                  href='https://github.com/natalyasafarevich'
                  className='footer__icon footer__icon_git'
                ></a>
              </div>
            </div>
            <div className='footer__navig'>
              <p className='footer__label highlighting-color'>Navigation</p>
              <nav className='footer__nav'>
                <ul className='footer__list'>
                  {HEADER_LINKS.map((item, i) => {
                    let id = item.id;
                    return (
                      <li key={i}>
                        <ScrollIntoView
                          smooth={true}
                          selector={`${id}`}
                          onClick={() => handleLinkClick(id)}
                          className={`footer__link  ${
                            activeLink === id ? 'active' : ''
                          }`}
                        >
                          <a href={`${id}`}>{item.title}</a>
                        </ScrollIntoView>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className='footer__contact'>
              <p className='footer__label highlighting-color'>Contact</p>
              <a className='footer__item' href='tel:451251357'>
                +48 451 251 357
              </a>
              <a
                className='footer__item'
                href='mailto:natalliasafarevich@gmail.com'
              >
                natalliasafarevich@gmail.c
              </a>
              <a className='footer__item' href='Portfolio-jcrea.com'>
                Portfolio-jcrea.com
              </a>
            </div>
          </div>
          <p className='footer__right'>
            Copyright© 2023 Jayesh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
