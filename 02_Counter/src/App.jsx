import { useState } from "react";

// UI updation is handled by React, so we need to use state to trigger re-rendering of the component when the counter value changes.
function App() {
  const [counter, setCounter] = useState(0); //useState returns array with 2 values, first is the current state value and second is the function to update that state value. We can use array destructuring to assign these values to variables.
  // To think: even when using const, we can still update the value of counter using fn: setCounter, why?
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
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

//why we have to use useState instead of a normal variable to store the counter value?
//In React, when we update a normal variable, it does not trigger a re-render of the component.
// This means that the UI will not reflect the updated value of the counter. On the other hand,
// when we use useState to manage the counter value, React knows that it needs to re-render the component
// whenever the state changes. This is because useState provides a way for React to track changes to the
// state and update the UI accordingly. Therefore, using useState allows us to ensure that our UI stays in
// sync with our data and reflects any changes we make to the counter value.
