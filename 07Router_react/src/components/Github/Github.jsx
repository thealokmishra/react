// import { useEffect, useState } from "react";
// directly calling API approach
// function Github() {
//   //   const data = useLoaderData();
//   const [data, setData] = useState({}); //empty object to store response data
//   useEffect(() => {
//     // fetch response for given user
//     fetch(`https://api.github.com/users/thealokmishra`)
//       .then((res) => res.json()) // convert to json
//       .then((res) => setData(res)); //set object data to the response recieved for given user
//     console.log(data);
//   }, []);
//   return (
//     <div className=" m-4 p-4 rounded-xl text-center text-4xl text-white font-bold bg-orange-700">
//       Github ID: {data.id}
//       <img
//         src={data.avatar_url}
//         alt="Github dp"
//         width={300}
//         className="rounded-lg"
//       />
//     </div>
//   );
// }

// export default Github;

// using loader approach
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github ID: {data.id}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;
