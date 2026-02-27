import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;
  return (
    <div className="p-4 text-center text-4xl font-bold">
      Welcome: {user.username}
    </div>
  );
}
