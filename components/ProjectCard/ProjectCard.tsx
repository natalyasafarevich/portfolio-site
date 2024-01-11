import {FC} from 'react';
import './ProjectCard.scss';
import {CardProps} from '@/constants/constants';

type ProjectCardProps = {
  card: CardProps;
};
const ProjectCard: FC<ProjectCardProps> = ({card}) => {
  return (
    <div className='project-card'>
      <div className='project-card__wrap'>
        <p className='project-card__title'>{card.title}</p>
        <div className='project-card__backing'>
          <div className='project-card__main'>
            <div className='project-card__row'>
              {card.items.map((item, i) => (
                <div
                  className='project-card__item'
                  key={i}
                  style={{
                    background: `center/contain no-repeat url(${item.src})`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
