import CatalogItem from '../CatalogItem/CatalogItem';
import css from './CatalogList.module.css';

const CatalogList = ({ totalPages, page, handleLoadMore, campers }) => {
  return (
    <div className={css.containerList}>
      <ul className={css.containerItem}>
        {campers.map(camper => {
          return (
            <li key={camper.id}>
              <CatalogItem camper={camper} />
            </li>
          );
        })}
      </ul>
      {totalPages > page ? (
        <button onClick={handleLoadMore} className={css.btnList}>
          Load More
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CatalogList;
