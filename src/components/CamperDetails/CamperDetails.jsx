import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/campers/selectors';
import Loader from '../Loader/Loader';
import ItemPhoto from '../ItemPhoto/ItemPhoto';
import FeaturesReviews from '../FeaturesReviews/FeaturesReviews';
import icons from '../../images/icons.svg';
import css from './CamperDetails.module.css';

const CamperDetails = ({ camper = {} }) => {
  const {
    name,
    rating,
    location,
    gallery = [],
    reviews = [],
    price,
    description,
  } = camper;

  const loading = useSelector(selectLoading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={css.containerDetails}>
          <div className={css.contentTitle}>
            <h2 className={css.title}>{name}</h2>
            <div className={css.info}>
              <div>
                <svg className={css.icon}>
                  <use href={`${icons}#${'icon-star-pressed'}`} />
                </svg>
                <span>
                  {rating}({reviews.length} Reviews)
                </span>
              </div>
              <div>
                <svg className={css.icon}>
                  <use href={`${icons}#${'icon-map'}`} />
                </svg>
                <span>{location}</span>
              </div>
            </div>
            <p className={css.price}>€{price}.00</p>
          </div>
          <ItemPhoto gallery={gallery || []} showAll />

          <p className={css.descriptionDetails}>{description}</p>
          <FeaturesReviews />
        </div>
      )}
    </>
  );
};

export default CamperDetails;
