import { render } from "react-dom";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div className="min-h-screen pt-12 bg-gray-200">
        <div className="container px-4 py-8 mx-auto rounded-md shadow-sm bg-gray-50">
          <h1 className="inline-block pb-2 mb-8 text-2xl font-bold border-b-4">
            Time Reservation
          </h1>
          <div className="overflow-hidden">
            <div className="flex flex-row overflow-x-scroll">
              <section className="flex-shrink-0 w-1/3 border">1</section>
              <section className="flex-shrink-0 w-1/3 border">2</section>
              <section className="flex-shrink-0 w-1/3 border">3</section>
            </div>
          </div>
        </div>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
