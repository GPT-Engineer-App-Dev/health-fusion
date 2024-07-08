import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import WorkoutProgressChart from "@/components/WorkoutProgressChart";

const Progress = () => {
  const { data: workouts, error, isLoading } = useQuery({
    queryKey: ["workouts"],
    queryFn: fetchWorkouts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Workout Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <WorkoutProgressChart workouts={workouts} />
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

export default Progress;