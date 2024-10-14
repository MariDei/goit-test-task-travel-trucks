import { useState } from 'react';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import css from './FeaturesReviews.module.css';

const FeaturesReviews = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div>
      <div className={css.containerFeatRev}>
        <button
          className={`${css.btnFeatRev} ${
            activeTab === 'features' ? css.active : ''
          }`}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>
        <button
          className={`${css.btnFeatRev} ${
            activeTab === 'reviews' ? css.active : ''
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>
      <div>
        {activeTab === 'features' && (
          <div className={css.featuresContent}>
            <Features />
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <Reviews />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesReviews;
