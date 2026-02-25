import { useParams } from "react-router-dom"; //useParams is used to get the params from the url e.h query parameters like userid

export default function User() {
  // te parameter name we give here: userid, should be same in routes too in main.jsx
  const { userid } = useParams();
  return (
    <div className="p-4 text-center text-4xl font-bold">User: {userid}</div>
  );
}
