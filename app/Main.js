import React from "react";
import ReactDOM from "react-dom";

function ExampleComponent() {
  return <div>Hello World????</div>;
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<ExampleComponent />);

if (module.hot) {
  module.hot.accept();
}
