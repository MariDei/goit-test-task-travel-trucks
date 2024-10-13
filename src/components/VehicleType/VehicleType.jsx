import { useDispatch, useSelector } from 'react-redux';
import icons from '../../images/icons.svg';
import { setVehicleType } from '../../redux/campers/slice';
import css from './VehicleType.module.css';

const VehicleType = () => {
  const dispatch = useDispatch();

  const selectedType = useSelector(
    state => state.campers.filters.selectedVehicleType
  );

  const vehicleTypes = ['Van', 'Fully Integrated', 'Alcove'];

  const handleSelect = type => {
    dispatch(setVehicleType(type));
  };
  return (
    <div className={css.containerType}>
      <h3 className={css.titleType}>Vehicle type</h3>
      <hr className={css.line} />
      <div className={css.btnType}>
        {vehicleTypes.map(type => (
          <button
            className={`${css.btn} ${selectedType === type ? css.active : ''}`}
            key={type}
            onClick={() => handleSelect(type)}
          >
            <svg className={css.listIcon}>
              <use href={`${icons}#icon-${type}`}></use>
            </svg>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};
export default VehicleType;
