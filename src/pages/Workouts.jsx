import { useState } from "react";
import WorkoutForm from "@/components/WorkoutForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  const handleLogWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Workouts</h1>
      </div>
      <WorkoutForm onSubmit={handleLogWorkout} />
      <Card>
        <CardHeader>
          <CardTitle>All Workouts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {workouts.map((workout, index) => (
              <li key={index}>
                {workout.date.toLocaleDateString()} - {workout.exerciseName} - {workout.sets} sets x {workout.reps} reps @ {workout.weight} kg
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Workouts;