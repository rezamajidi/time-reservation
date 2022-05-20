import CompanyHeader from "./CompanyHeader.jsx";
import { groupTimesByEndDate } from "../helpers/utils";
import { format } from "date-fns";
import TimeSlot from "./TimeSlot.jsx";

const CompanyColumn = ({ id, name, type, timeSlots }) => {
  return (
    <div>
      <CompanyHeader
        className="mb-12"
        name={name}
        logo={`https://loremflickr.com/120/120/logo,company?lock=${54 + id}`}
        type={type}
      />
      <p className="mt-10 mb-2 text-sm text-gray-700">Selected time slot</p>
      <div className="rounded-md">
        <TimeSlot start={"2022-05-05"} end={"2022-06-06"} />
      </div>
      <p className="mt-10 mb-2 text-sm text-gray-700">Available time slots</p>
      <div>
        {Object.keys(groupTimesByEndDate(timeSlots)).map((key, index) => (
          <div className="mb-1" key={index}>
            <p className="p-4 mb-2 text-xl text-center text-gray-800 border border-indigo-100 rounded-sm bg-indigo-50">
              {format(new Date(key), "ccc, MMM do")}
            </p>
            <ul>
              {groupTimesByEndDate(timeSlots)[key].map((date, index) => (
                <li className="mb-2" key={index}>
                  <TimeSlot start={date.start_time} end={date.end_time} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyColumn;
