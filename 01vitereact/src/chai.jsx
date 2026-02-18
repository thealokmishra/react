// first letter of fn should be capitalized in React component,
// you can only return one element from a React component, but that element can have as many children as you want so we wrap into div if returning multiple elements
//  '<></>' is a React Fragment, it allows us to return multiple elements without adding an extra node to the DOM
function Chai() {
  return <h3>chai is ready</h3>;
}

export default Chai;
