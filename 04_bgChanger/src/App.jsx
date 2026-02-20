import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  // on page reload the color will be reset to olive, because we are using useState to store the color, and useState is a hook that allows us to add state to our functional components, and when the component re-renders, the state will be reset to the initial value that we passed to useState, which is "olive" in this case, so we need to find a way to persist the color even after the page reloads, we can use localStorage for that, but for now we will just keep it simple and use useState.
  return (
    // when passing style as an object, we need to use double curly braces. The first one is for JSX and the second one is for the object, and for variable we can directly pass it without braces, see: color
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className=" text-white px-4 py-1 rounded-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
              // onClick takes function as an argument, so we need to wrap the setColor in an arrow function, otherwise it will be called immediately when the component renders, and we don't want that, we want it to be called only when the button is clicked
            >
              Red
            </button>

            <button
              className=" text-white px-4 py-1 rounded-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>

            <button
              className=" text-white px-4 py-1 rounded-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
