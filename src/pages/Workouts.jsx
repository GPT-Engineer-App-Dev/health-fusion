import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const Workouts = () => {
  const { data: workouts, error, isLoading } = useQuery({
    queryKey: ["workouts"],
    queryFn: fetchWorkouts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Workouts</h1>
        <Button>Add New Workout</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Workouts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {workouts.map((workout) => (
              <li key={workout.id}>
                {workout.type} - {workout.duration} mins - {workout.caloriesBurned} calories
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const fetchWorkouts = async () => {
  const response = await fetch("/api/workouts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export default Workouts;