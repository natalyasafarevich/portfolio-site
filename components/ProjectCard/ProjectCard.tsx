'use client';
import {FC} from 'react';
import './ProjectCard.scss';
import {CardProps} from '@/constants/constants';
import {useInView} from 'react-intersection-observer';

type ProjectCardProps = {
  card: CardProps;
};
const ProjectCard: FC<ProjectCardProps> = ({card}) => {
  const {ref, inView, entry} = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className='project-card' ref={ref}>
      <div className='project-card__wrap'>
        <p className='project-card__title'>{card.title}</p>
        <div className='project-card__backing'>
          <div className='project-card__main'>
            <div className='project-card__row'>
              {inView ? (
                card.items.map((item, i) => (
                  <div
                    className='project-card__item'
                    key={i}
                    style={{
                      background: `center/contain no-repeat url(${item.src})`,
                    }}
                  ></div>
                ))
              ) : (
                <div className='project-card__skeleton'></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
