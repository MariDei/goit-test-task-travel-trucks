import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import { selectCamper } from '../../redux/campers/selectors';
import { fetchCamperById } from '../../redux/campers/operations';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id[1]));
  }, [dispatch, id]);

  return (
    <>
      <CamperDetails camper={camper} />
    </>
  );
};

export default CamperPage;
