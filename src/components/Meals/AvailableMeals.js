import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import './AvailableMeals.scss';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Club sandwich + coffee',
    description: 'breakfast meal',
    price: 12.99,
  },
  {
    id: 'm2',
    name: 'Jollof Spaghetti + Plantain + Beef',
    description: 'workman combo',
    price: 26.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 10.99,
  },
  {
    id: 'm4',
    name: 'Ofada rice + Ofada Sauce',
    description: 'Healthy...and green...',
    price: 28.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className='meals'>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
