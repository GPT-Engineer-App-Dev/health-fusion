import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePickerDemo } from "@/components/ui/date-picker";

const WorkoutForm = ({ onSubmit }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ exerciseName, sets, reps, weight, date });
    setExerciseName("");
    setSets("");
    setReps("");
    setWeight("");
    setDate(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log Workout</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="exerciseName">Exercise Name</Label>
            <Input
              id="exerciseName"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="sets">Sets</Label>
            <Input
              id="sets"
              type="number"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="reps">Reps</Label>
            <Input
              id="reps"
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <DatePickerDemo selected={date} onSelect={setDate} required />
          </div>
          <Button type="submit">Log Workout</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WorkoutForm;