import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { data: user, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUserData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user.name}!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here's a summary of your activities today:</p>
          <ul>
            <li>Steps taken: {user.steps}</li>
            <li>Calories burned: {user.caloriesBurned}</li>
            <li>Active minutes: {user.activeMinutes}</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Workouts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {user.recentWorkouts.map((workout) => (
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

const fetchUserData = async () => {
  const response = await fetch("/api/user");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export default Dashboard;