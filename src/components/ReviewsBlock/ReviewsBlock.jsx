import icons from '../../images/icons.svg';
import css from './ReviewsBlock.module.css';

const ReviewsBlok = ({ reviews }) => {
  const star = 5;
  return (
    <div className={css.containerRevBlock}>
      {reviews.map((review, index) => (
        <div key={index} className={css.containerRev}>
          <div className={css.blockRev}>
            <div className={css.imgRev}>{review.reviewer_name.charAt(0)}</div>
            <div className={css.nameRev}>
              <p className={css.headingName}>{review.reviewer_name}</p>
              <div className={css.stars}>
                {[...Array(star)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={
                      starIndex < review.reviewer_rating
                        ? css.filledStar
                        : css.emptyStar
                    }
                  >
                    <use
                      href={`${icons}#${
                        starIndex < review.reviewer_rating
                          ? 'icon-star-pressed'
                          : 'icon-star'
                      }`}
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={css.commentRev}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsBlok;
