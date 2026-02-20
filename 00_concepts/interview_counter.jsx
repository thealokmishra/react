import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // even if we call setCounter multiple times in a row, it will only update the counter value once, because React batches state updates for performance reasons. This means that if we call setCounter multiple times in a single event handler, React will only apply the last update to the state. In this case, if we call setCounter(counter + 1) four times in a row, React will only apply the last update and the counter value will only increase by 1 instead of 4. To ensure that each update is applied correctly, we can use the functional form of setState, which allows us to access the previous state value and update it accordingly. For example:
  const addValue = () => {
    //wont work
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);

    // works: cuase we aren't taking batch were using prev state
    setCounter((prevCounter) => prevCounter + 1); //setState takes a callback function as an argument, which receives the previous state value as an argument. We can use this previous state value to calculate the new state value and return it from the callback function. This ensures that each update is applied correctly, even if we call setCounter multiple times in a row.
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Some text</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  );
}

export default App;
