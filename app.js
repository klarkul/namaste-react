/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 */

const element = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement("div", {id: "child1"},
    [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]), React.createElement("div", {id: "child2"},
    [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])]
    );
console.log("what's inside the heading", element);
const root = ReactDOM.createRoot(document.getElementById("root-container"));
// console.log("what's inside a root?", root)
root.render(element);