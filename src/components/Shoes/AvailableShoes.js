import Card from '../UI/Card';
import ShoeItem from './ShoesItem/ShoeItem';
import classes from './AvailableShoes.module.css';

const DUMMY_Shoes = [
  {
    id: 's1',
    name: 'Classic White Sneakers',
    description: 'A timeless favorite for any wardrobe',
    price: 79.99,
    },
    {
    id: 's2',
    name: 'Leather Chelsea Boots',
    description: 'A stylish and versatile addition to any outfit',
    price: 129.99,
    },
    {
    id: 's3',
    name: 'Athletic Running Shoes',
    description: 'Designed for comfort and performance',
    price: 99.99,
    },
    {
    id: 's4',
    name: 'Elegant Dress Shoes',
    description: 'Perfect for any formal occasion',
    price: 149.99,
    },
];

const AvailableShoes = () => {
  const mealsList = DUMMY_Shoes.map((meal) => (
    <ShoeItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableShoes;
