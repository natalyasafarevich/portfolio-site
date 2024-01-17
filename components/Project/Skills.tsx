'use client';
import {FC} from 'react';
import './Skills.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import {PROJECT_CARDS} from '@/constants/constants';
import {useInView} from 'react-intersection-observer';

const Skills: FC = () => {
  return (
    <section className='project' id='skills'>
      <div className='project__wrap'>
        <div className='wrap'>
          <div className='project__info'>
            <p className='project__title'>
              My
              <span className='highlighting-color'> Skills</span>
            </p>
            <p className='project__desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
          <div className='project__row'>
            {PROJECT_CARDS.map((item, i) => {
              return (
                <div className='project__card' key={i}>
                  <ProjectCard card={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
