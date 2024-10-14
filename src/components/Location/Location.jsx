import icons from '../../images/icons.svg';
import css from './Location.module.css';

const Location = ({ location, setLocation }) => {
  const handleChange = event => {
    setLocation(event.target.value);
  };

  return (
    <div className={css.containerLocation}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <div className={css.iconPosition}>
        <svg className={css.icon} width="20" height="20">
          <use href={`${icons}#icon-map`} />
        </svg>
        <input
          className={css.inputLocation}
          id="location"
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Kyiv, Ukraine"
        />
      </div>
    </div>
  );
};

export default Location;
