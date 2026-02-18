import Chai from "./chai";

// we can inject variables into JSX using curly braces {variable}, these must be evaluated expressions, meaning they must produce a value. We cannot use statements like if or for directly inside JSX, but we can use ternary operators or logical && to conditionally render elements based on the value of a variable. In this example, we are injecting the username variable into the JSX, which will be evaluated and rendered as part of the output.
function App() {
  const username = "chai aur code";

  return (
    <>
      <Chai />
      <h1>chai aur react {username}</h1>
      <p>test para</p>
    </>
  );
}

export default App;
