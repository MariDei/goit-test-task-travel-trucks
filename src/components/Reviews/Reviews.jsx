import { useSelector } from 'react-redux';
import BookingForm from '../BookingForm/BookingForm';
import ReviewsBlock from '../ReviewsBlock/ReviewsBlock';
import { selectCamper } from '../../redux/campers/selectors';

import css from './Reviews.module.css';

const Reviews = () => {
  const { reviews = [] } = useSelector(selectCamper);

  return (
    <div className={css.containerReviews}>
      <ReviewsBlock reviews={reviews} />
      <BookingForm />
    </div>
  );
};

export default Reviews;
