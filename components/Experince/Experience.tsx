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
    <div className='experience' id='experience' ref={ref}>
      <div className='wrap'>
        <div className='experience__wrap'>
          <p className='experience__title'>
            My Work <span className='highlighting-color'>Experience</span>{' '}
          </p>
          <div className='experience__row'>
            <div className='experience__info'>
              <p className='experience__name'>
                Toolkeeper
                <span>June 2022 – Nov 2022</span>
                <span className='experience__name'>
                  Front-end Developer
                  <span>
                    — Creating layouts for web applications and websites using
                    HTML, CSS, and JavaScript <br />
                    <br />— Working with designs in Figma or other graphic
                    editors to create interface designs <br />
                    <br />— Developing interfaces for mobile applications using
                    React Native
                  </span>
                </span>
              </p>
              <p className='experience__name'>
                Sugee Pvt limited, Mumbai <span>Sep 2020- July 2023</span>
                <span className='experience__name'>
                  Front-end Developer
                  <span>
                    — Managing application state with React-Redux/ Next.js /
                    TypeScript
                    <br />
                    <br />
                    — Creating server requests using REST API and GraphQL, as
                    well as processing received data <br />
                    <br /> — Working with Git for version control and hosting
                    configuration. <br />
                    <br /> — Search Engine Optimization (SEO) implementation{' '}
                    <br />
                    <br /> — Project management and collaboration with team
                    members
                  </span>
                </span>
              </p>
            </div>

            {inView && <div className='experience__icon'></div>}
            <div className='experience__info'>
              <p className='experience__name'>
                Front-end Developer
                <span>
                  — Creating layouts for web applications and websites using
                  HTML, CSS, and JavaScript <br />
                  <br />— Working with designs in Figma or other graphic editors
                  to create interface designs <br />
                  <br />— Developing interfaces for mobile applications using
                  React Native
                </span>
              </p>
              <p className='experience__name'>
                Front-end Developer
                <span>
                  — Managing application state with React-Redux/ Next.js /
                  TypeScript
                  <br />
                  <br />
                  — Creating server requests using REST API and GraphQL, as well
                  as processing received data <br />
                  <br /> — Working with Git for version control and hosting
                  configuration. <br />
                  <br /> — Search Engine Optimization (SEO) implementation{' '}
                  <br />
                  <br /> — Project management and collaboration with team
                  members
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
