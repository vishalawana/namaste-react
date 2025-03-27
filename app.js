import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { key: "h1-1" }, "I'm an H1 tag"),
      React.createElement("h2", { key: "h2-1" }, "I'm an H2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { key: "h1-2" }, "I'm an H1 tag"),
      React.createElement("h2", { key: "h2-2" }, "I'm an H2 tag"),
    ]),
  ]);
   

   const jsxPara = (
    <p id="jsxPara">This is jsx Para that i created in app.js</p>
   );
   console.log(jsxPara)
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent);
   