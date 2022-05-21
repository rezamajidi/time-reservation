import { render } from "react-dom";
import { useState, useEffect, StrictMode } from "react";
import CompanyContext from "./CompanyContext";
import CompanyColumn from "./components/CompanyColumn.jsx";
import CurrentLocalTime from "./components/CurrentLocalTime.jsx";

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
          <header className="flex items-baseline pb-2 mb-8 border-b-4">
            <h1 className="text-2xl font-bold ">Time Reservation</h1>
            <div className="flex items-center flex-1">
              <p className="ml-2 text-xs text-gray-700">
                All times are in your local time
              </p>
              <div className="ml-auto">
                <CurrentLocalTime />
              </div>
            </div>
          </header>
          <CompanyContext.Provider value={{ companies, setCompanies }}>
            <div className="overflow-hidden">
              <div className="flex flex-row overflow-x-scroll">
                {companies.length &&
                  companies.map((company) => (
                    <section
                      key={company.id}
                      className="flex-shrink-0 w-1/3 px-8"
                    >
                      <CompanyColumn
                        id={company.id}
                        name={company.name ?? ""}
                        type={company.type ?? "-"}
                        timeSlots={company.time_slots}
                      />
                    </section>
                  ))}
              </div>
            </div>
          </CompanyContext.Provider>
        </div>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
