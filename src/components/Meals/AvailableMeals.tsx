import { DUMMY_MEALS } from "../../DummyData";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import "./AvailableMeals.css";

const AvailableMeals = () => {
  return (
    <section className="meals">
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
