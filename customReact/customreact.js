// fn to append created elements into dom
function customRender(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type); //get type: 'a' of element to be created from reactElement object and create that element using document.createElement
  //   domElement.innerText = reactElement.children; //get children: 'Click me to visit Google' of element to be created from reactElement object and set it as innerText of the created element
  //   domElement.setAttribute("href", reactElement.props.href); //get href: 'https://www.google.com' from reactElement object and set it as href attribute of the created element
  //   domElement.setAttribute("target", reactElement.props.target); //get target: '_blank' from reactElement object and set it as target attribute of the created element
  //   container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innertText = reactElement.children;
  // for each prop in object reactElement set the attribute of the created element to the value of that prop except for children prop
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer); //append the created DOM element to the root maincontainer
