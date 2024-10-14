import { useSelector } from 'react-redux';
import BookingForm from '../BookingForm/BookingForm';
import ItemEquipments from '../ItemEquipments/ItemEquipments';
import VehicleDetails from '../VehicleDetails/VehicleDetails.jsx';
import { selectCamper } from '../../redux/campers/selectors';
import css from './Features.module.css';

const Features = () => {
  const {
    AC,
    automatic,
    kitchen,
    TV,
    bathroom,
    radio,
    gas,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = useSelector(selectCamper);

  const equipmentProps = {
    AC,
    automatic,
    kitchen,
    TV,
    bathroom,
    radio,
    gas,
  };

  const vehicleProps = {
    form,
    length,
    width,
    height,
    tank,
    consumption,
  };

  return (
    <div className={css.containerFeatures}>
      <div className={css.containerEquipment}>
        <ItemEquipments {...equipmentProps} />
        <div>
          <h3 className={css.titleFeatures}>Vehicle details</h3>
          <VehicleDetails {...vehicleProps} />
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default Features;
