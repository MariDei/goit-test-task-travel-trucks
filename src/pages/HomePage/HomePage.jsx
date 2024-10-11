import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <section className={css.containerHero}>
        <div className={css.wrapperHero}>
          <h1 className={css.titleHero}>Campers of your dreams</h1>
          <h2 className={css.subTitleHero}>
            You can find everything you want in our catalog
          </h2>
          <Link className={css.btnHero} to="/catalog">
            View Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
