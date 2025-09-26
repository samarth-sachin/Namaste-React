const nestedTree = React.createElement(
  "div",
  { id: "grandparent" },
  React.createElement(
    "div",
    { id: "parent" },
    [
      React.createElement(
        "div",
        { id: "child1" },
        [
          React.createElement("h1", { id: "sam" }, "Hi Sam he"),
          React.createElement("h2", { id: "k" }, "Underlined"),
          React.createElement("p", { id: "note" }, "This is a nested paragraph.")
        ]
      ),
      React.createElement(
        "div",
        { id: "child2" },
        [
          React.createElement("h1", { id: "sam" }, "Hi Sam he"),
          React.createElement("h2", { id: "k" }, "Underlined"),
          React.createElement("p", { id: "note" }, "This is a nested paragraph.")
        ]
      )
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedTree);