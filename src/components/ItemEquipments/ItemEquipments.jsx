import icons from '../../images/icons.svg';
import css from './ItemEquipments.module.css';

const ItemEquipments = ({
  AC,
  automatic,
  kitchen,
  TV,
  bathroom,
  radio,
  gas,
}) => {
  return (
    <div>
      <ul className={css.equipmentList}>
        {AC && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use xlinkHref={`${icons}#${'icon-wind'}`} />
            </svg>
            AC
          </li>
        )}
        {automatic && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use xlinkHref={`${icons}#${'icon-diagram'}`} />
            </svg>
            Automatic
          </li>
        )}
        {kitchen && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use xlinkHref={`${icons}#${'icon-cup-hot'}`} />
            </svg>
            Kitchen
          </li>
        )}
        {TV && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use xlinkHref={`${icons}#${'icon-tv'}`} />
            </svg>
            TV
          </li>
        )}
        {bathroom && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use xlinkHref={`${icons}#${'icon-bi-droplet'}`} />
            </svg>
            Bathroom
          </li>
        )}
        {radio && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use xlinkHref={`${icons}#${'icon-ui-radios'}`} />
            </svg>
            Radio
          </li>
        )}
        {gas && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use xlinkHref={`${icons}#${'icon-fuel-pump'}`} />
            </svg>
            Gas
          </li>
        )}
      </ul>
    </div>
  );
};

export default ItemEquipments;
