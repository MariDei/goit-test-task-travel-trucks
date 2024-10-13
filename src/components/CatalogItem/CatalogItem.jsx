import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../images/icons.svg';
import ItemPhoto from '../ItemPhoto/ItemPhoto.jsx';
import ItemEquipments from '../ItemEquipments/ItemEquipments.jsx';
import { toggleFavorite } from '../../redux/campers/slice';
import css from './CatalogItem.module.css';

const CatalogItem = ({ camper }) => {
  const {
    id,
    name,
    rating,
    location,
    description,
    AC,
    automatic,
    kitchen,
    TV,
    bathroom,
    gallery,
    reviews,
    price,
  } = camper;

  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites) || [];
  const isFavorite = favorites.includes(id);
  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
  };

  const maxLength = 64;
  function text(description, maxLength) {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + '...';
  }

  return (
    <div className={css.containerItem}>
      <div>
        {gallery && gallery.length > 0 && <ItemPhoto gallery={gallery} />}
      </div>
      <div className={css.contentItem}>
        <div className={css.infoContent}>
          <div className={css.contentTitle}>
            <h3 className={css.truckTitle}>{name}</h3>
            <div className={css.infoTitle}>
              <p className={css.priceTitle}>€{price}.00</p>
              <button onClick={handleFavoriteClick}>
                <svg className={css.iconTitle}>
                  <use
                    href={`${icons}#${
                      isFavorite ? 'icon-heart-pressed' : 'icon-heart'
                    }`}
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={css.detailsItem}>
            <div className={css.detailsReview}>
              <svg className={css.detailsIcon}>
                <use href={`${icons}#${'icon-star-pressed'}`} />
              </svg>
              <span>
                {rating}({reviews.length} Reviews)
              </span>
            </div>
            <div className={css.detailsLocation}>
              <svg className={css.detailsIcon}>
                <use href={`${icons}#${'icon-map'}`} />
              </svg>
              <span>{location}</span>
            </div>
          </div>
          <p className={css.descriptionItem}>{text(description, maxLength)}</p>
        </div>
        <div className={css.itemEquipments}>
          <ItemEquipments
            AC={AC}
            automatic={automatic}
            kitchen={kitchen}
            TV={TV}
            bathroom={bathroom}
          />
        </div>
        <div>
          <Link className={css.btnItem} to={`/catalog/:${id}`}>
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
