import { useDispatch, useSelector } from 'react-redux';
import icons from '../../images/icons.svg';
import { toggleEquipment } from '../../redux/campers/slice';
import css from './VehicleEquipment.module.css';

const VehicleEquipment = () => {
  const dispatch = useDispatch();

  const selectedEquipment = useSelector(
    state => state.campers.filters.selectedEquipment
  );

  const equipmentItems = ['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'];

  const handleSelect = item => {
    dispatch(toggleEquipment(item));
  };

  return (
    <div className={css.containerEquipments}>
      <h3 className={css.titleEquipments}>Vehicle equipment</h3>
      <hr className={css.line} />
      <div className={css.btnEquipments}>
        {equipmentItems.map(item => (
          <button
            className={`${css.btn} ${
              selectedEquipment.includes(item) ? css.active : ''
            }`}
            key={item}
            onClick={() => handleSelect(item)}
          >
            <svg className={css.listIcon}>
              <use href={`${icons}#icon-${item}`}></use>
            </svg>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
