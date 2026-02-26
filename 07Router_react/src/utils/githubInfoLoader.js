export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/thealokmishra");
  console.log(response.json);
  return response.json();
};
