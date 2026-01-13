

import React from 'react';
import ReviewsPage from './ReviewsPage';

export const metadata = {
  title: {
    absolute:'Satisfied User',
  },
  description: "Best food mart in Chandpur",
};

const AllReview = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReview;