import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import MealHeader from './MealHeader';

const Meals = () => {
  return (
    <Fragment>
      <MealHeader />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
