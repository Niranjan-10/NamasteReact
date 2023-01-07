import React from "react";
import ReactDOM from "react-dom";

// This is a React Element
const heading = React.createElement("h1", { key: "title" }, "React is Cool"); // React.createElement => object => HTML

// JSX is same as React.createElement
// Babel understand the JSX, it's like a blackbox takes some code and spit some formatted code

// JSX => React.createElement => object => HTML
//BABEl does this convertion
const body = (
  <div key="body">
    <h1>Hello People !!</h1>
  </div>
);

// React Component
// -Functional
// -class based

const InnerContent = () => <p>Inner element</p>;

const ComponentExample = () => (
  //component composition - composing of components
  <div>
    <InnerContent />
    <p>This is a functional component</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// diff between element and component is
// component is a function tat returns the JSX element
// Element is a jsx variable

// To render the element we use below code
// root.render(body);

// to render the component
root.render(<ComponentExample />);

// Notes:
// Async Defer
