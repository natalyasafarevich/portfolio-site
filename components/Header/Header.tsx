'use client';
import {FC, useEffect, useState} from 'react';
import './Header.scss';
import ScrollIntoView from 'react-scroll-into-view';
import {HEADER_LINKS} from '@/constants/constants';

const Header: FC = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector('html')?.classList.add('hide-scroll');
    } else {
      document.querySelector('html')?.classList.remove('hide-scroll');
    }
  }, [isOpen]);
  const handleLinkClick = (id: any) => {
    setActiveLink(id);
  };

  return (
    <header className={`header ${isOpen ? 'open' : ''}`}>
      <div className='wrap'>
        <div className={`header__top ${isOpen ? 'open' : ''}`}>
          <button
            className={`header__mobile ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </div>
        <div className='header__wrap'>
          <nav className='header__nav'>
            <ul className='header__list'>
              {HEADER_LINKS.map((item, i) => {
                let id = item.id;
                return (
                  <li key={i}>
                    <ScrollIntoView
                      smooth={true}
                      selector={`${id}`}
                      onClick={() => {
                        handleLinkClick(id);
                        setIsOpen(!isOpen);
                      }}
                      className={`header__link  ${
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
      </div>
    </header>
  );
};

export default Header;
