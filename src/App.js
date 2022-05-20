import { render } from "react-dom";
import { useState, useEffect, StrictMode } from "react";
import CompanyColumn from "./components/CompanyColumn.jsx";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const fetchCompanyTimeSlots = async () => {
    const res = await fetch("http://localhost:3000/timeslots").then(
      (response) => response.json()
    );
    setCompanies(res);
  };
  useEffect(() => {
    fetchCompanyTimeSlots();
  }, []);
  return (
    <StrictMode>
      <div className="min-h-screen pt-12 bg-gray-200">
        <div className="container px-4 py-8 mx-auto rounded-md shadow-sm bg-gray-50">
          <h1 className="inline-block pb-2 mb-8 text-2xl font-bold border-b-4">
            Time Reservation
          </h1>
          <div className="overflow-hidden">
            <div className="flex flex-row overflow-x-scroll">
              {companies.map((company) => (
                <section
                  key={company.id}
                  className="flex-shrink-0 w-1/3 px-8 border"
                >
                  <CompanyColumn
                    id={company.id}
                    name={company.name ?? ""}
                    type={company.type ?? "-"}
                  />
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
