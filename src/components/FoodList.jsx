import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
    return (
        <div>
            {foodData && Array.isArray(foodData) && foodData.map((food) => (
                <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
            ))}
        </div>
    );
}
