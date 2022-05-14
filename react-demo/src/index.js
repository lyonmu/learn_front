import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <div>
    <h1>hello world</h1>
  </div>
);

console.log("first");
console.log("second");
