import { render } from "react-dom";
import { useState, useEffect, StrictMode } from "react";
import { format } from "date-fns";
import CompanyColumn from "./components/CompanyColumn.jsx";
import CompanyContext from "./CompanyContext";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [currentLocalTime, setCurrentLocalTime] = useState(new Date());
  const fetchCompanyTimeSlots = async () => {
    const res = await fetch("http://localhost:3000/timeslots").then(
      (response) => response.json()
    );
    setCompanies(res);
  };
  useEffect(() => {
    fetchCompanyTimeSlots();
    const timerId = setInterval(() => {
      setCurrentLocalTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <StrictMode>
      <CompanyContext.Provider value={{ companies, setCompanies }}>
        <div className="min-h-screen pt-12 bg-gray-200">
          <div className="container px-4 py-8 mx-auto rounded-md shadow-sm bg-gray-50">
            <header className="flex items-baseline pb-2 mb-8 border-b-4">
              <h1 className="text-2xl font-bold ">Time Reservation</h1>
              <div className="flex items-center flex-1">
                <p className="ml-2 text-xs text-gray-700">
                  All times are in your local time
                </p>
                <p className="ml-auto text-xs text-gray-600">
                  Your local time: {format(currentLocalTime, "HH:mm")}
                </p>
                <p className="w-3 h-3 p-px ml-2 bg-gray-100 border border-gray-300 rounded-full">
                  <span className="block w-full h-full bg-green-200 rounded-full animate-ping"></span>
                </p>
              </div>
            </header>
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
          </div>
        </div>
      </CompanyContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
