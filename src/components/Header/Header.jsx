import { Link } from 'react-router-dom';
import Logo from '../../images/logo_travel-trucks.svg';
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.containerHeader}>
      <Link to="/">
        <img src={Logo} width="136" height="16" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
