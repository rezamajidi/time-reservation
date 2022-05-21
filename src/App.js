import { render } from "react-dom";
import { useState, useEffect, StrictMode } from "react";
import CompanyContext from "./CompanyContext";
import CompanyColumn from "./components/CompanyColumn.jsx";
import CurrentLocalTime from "./components/CurrentLocalTime.jsx";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const fetchCompanyTimeSlots = async () => {
    const res = await fetch(`${process.env.API_BASE_URL}/timeslots`).then(
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
          <header className="flex flex-col pb-2 mb-8 border-b-4 md:items-baseline md:flex-row">
            <h1 className="mb-2 mr-2 text-2xl font-bold md:mb-0">
              Time Reservation
            </h1>
            <div className="flex items-center flex-1">
              <p className="text-xs text-gray-700">
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
                {companies.map((company) => (
                  <section
                    key={company.id}
                    className="flex-shrink-0 w-full px-4 lg:px-8 sm:w-1/2 md:w-1/3"
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
