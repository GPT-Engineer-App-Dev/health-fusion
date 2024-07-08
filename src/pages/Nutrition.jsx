import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const Nutrition = () => {
  const { data: meals, error, isLoading } = useQuery({
    queryKey: ["meals"],
    queryFn: fetchMeals,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nutrition</h1>
        <Button>Add New Meal</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Meals</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {meals.map((meal) => (
              <li key={meal.id}>
                {meal.type} - {meal.calories} calories - {meal.macronutrients}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Daily Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Calories: {meals.reduce((sum, meal) => sum + meal.calories, 0)}</p>
          <p>Macronutrient Distribution: {calculateMacronutrientDistribution(meals)}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const fetchMeals = async () => {
  const response = await fetch("/api/meals");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const calculateMacronutrientDistribution = (meals) => {
  // Implement logic to calculate macronutrient distribution
  return "Protein: 30%, Carbs: 50%, Fat: 20%";
};

export default Nutrition;