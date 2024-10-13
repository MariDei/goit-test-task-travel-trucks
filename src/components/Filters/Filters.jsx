/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Location from '../Location/Location';
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';
import VehicleType from '../VehicleType/VehicleType';
import { selectFilters } from '../../redux/campers/selectors';
import {
  setLocation,
  setVehicleType,
  toggleEquipment,
  resetFilters,
} from '../../redux/campers/slice';
import css from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();

  const { location, selectedVehicleType, selectedEquipment } =
    useSelector(selectFilters);

  const handleLocationChange = useCallback(
    newLocation => {
      dispatch(setLocation(newLocation));
    },
    [dispatch]
  );

  const handleVehicleTypeChange = useCallback(
    vehicleType => {
      dispatch(setVehicleType(vehicleType));
    },
    [dispatch]
  );

  const handleEquipmentChange = useCallback(
    equipment => {
      dispatch(toggleEquipment(equipment));
    },
    [dispatch]
  );

  const handleSearch = useCallback(() => {
    dispatch(resetFilters());
  }, [location, selectedVehicleType, selectedEquipment]);

  return (
    <div>
      <Location location={location} setLocation={handleLocationChange} />
      <div className={css.containerFilters}>
        <h3 className={css.titleFilter}>Filters</h3>
        <VehicleEquipment
          selectedEquipment={selectedEquipment}
          setSelectedEquipment={handleEquipmentChange}
        />
        <VehicleType
          selectedVehicleType={selectedVehicleType}
          setSelectedVehicleType={handleVehicleTypeChange}
        />
      </div>
      <button className={css.btnFilter} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
