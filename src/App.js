import { render } from "react-dom";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div>Hello from React ⚛️</div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
