import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App | chai</h1>
//     </div>
//   );
// }

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

// const anotherUser = "chai aur react";

// React.createElement is a React method that creates a React element. It takes three arguments: the type of the element, the props (attributes) of the element, and the children of the element. In this example, we are creating an anchor (<a>) element with an href attribute pointing to "https://google.com" and a target attribute set to "_blank". The children of the element is the text "click me to visit google" and anotherElement which is another React element.
// we don't usually use React.createElement directly in our code, instead we use JSX syntax which is a more convenient way to create React elements. JSX is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript files. When we use JSX, it gets transpiled to React.createElement calls under the hood.
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherElement,
);

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
