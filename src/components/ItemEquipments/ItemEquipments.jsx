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
              <use href={`${icons}#${'icon-AC'}`} />
            </svg>
            AC
          </li>
        )}
        {automatic && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={`${icons}#${'icon-Automatic'}`} />
            </svg>
            Automatic
          </li>
        )}
        {kitchen && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={`${icons}#${'icon-Kitchen'}`} />
            </svg>
            Kitchen
          </li>
        )}
        {TV && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={`${icons}#${'icon-TV'}`} />
            </svg>
            TV
          </li>
        )}
        {bathroom && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={`${icons}#${'icon-Bathroom'}`} />
            </svg>
            Bathroom
          </li>
        )}
        {radio && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={`${icons}#${'icon-Radio'}`} />
            </svg>
            Radio
          </li>
        )}
        {gas && (
          <li className={css.equipmentItem}>
            <svg className={css.equipmentIcon}>
              <use href={`${icons}#${'icon-Gas'}`} />
            </svg>
            Gas
          </li>
        )}
      </ul>
    </div>
  );
};

export default ItemEquipments;
