import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
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
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Weight: {user.weight}</p>
          <p>Height: {user.height}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Fitness Goals: {user.goals}</p>
          <p>Progress: {user.progress}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Update your profile information and app settings here.</p>
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

export default Profile;