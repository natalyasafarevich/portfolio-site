'use client';
import {FC, useState} from 'react';
import './Header.scss';
import ScrollIntoView from 'react-scroll-into-view';
import {HEADER_LINKS} from '@/constants/constants';

const Header: FC = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (id: any) => {
    setActiveLink(id);
  };
  return (
    <header className='header'>
      <div className='wrap'>
        <div className='header__wrap'>
          <nav className='header__nav'>
            <ul className='header__list'>
              {HEADER_LINKS.map((item, i) => {
                let title = item.title.toLocaleLowerCase();
                return (
                  <li key={i}>
                    <ScrollIntoView
                      smooth={true}
                      selector={`#${title}`}
                      onClick={() => handleLinkClick(title)}
                      className={`header__link  ${
                        activeLink === title ? 'active' : ''
                      }`}
                    >
                      <a href={`#${title}`}>{item.title}</a>
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