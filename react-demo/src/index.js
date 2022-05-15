import { createRoot } from "react-dom/client";
import AppClass from "./components/AppClass";
import AppFunction from "./components/AppFunction";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <div>
    <AppClass />
    <AppFunction />
  </div>
);
