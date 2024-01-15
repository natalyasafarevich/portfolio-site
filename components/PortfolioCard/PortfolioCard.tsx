import {FC, useState} from 'react';
import './PortfolioCard.scss';
import {CardPProps} from '@/constants/constants';
import {Link} from 'react-scroll';
import {useInView} from 'react-intersection-observer';

type PortfolioCardProps = {
  card: CardPProps;
};

const PortfolioCard: FC<PortfolioCardProps> = ({card}) => {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <Link
        to='/'
        className={`portfolio-card ${isShown ? 'show' : ''}`}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        // Добавляем ref здесь
      >
        <span
          className={`portfolio-card__wrap `}
          style={{
            background: `center/cover no-repeat url(${card.src})`,
          }}
        >
          <span className='portfolio-card__button'></span>
          <span className={`portfolio-card__info `}>
            <span className={`portfolio-card__title`}>{card.title}</span>
            <span className={`portfolio-card__desc`}>{card.desc}</span>
          </span>
        </span>
      </Link>
    </div>
  );
};

export default PortfolioCard;
