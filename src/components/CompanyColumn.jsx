import CompanyHeader from "./CompanyHeader.jsx";
import { groupTimesByEndDate } from "../helpers/utils";
import { format } from "date-fns";

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
      <div className="border rounded-md">none</div>
      <p className="mt-10 mb-2 text-sm text-gray-700">Available time slots</p>
      <div className="bg-gray-100">
        {Object.keys(groupTimesByEndDate(timeSlots)).map((key, index) => (
          <div className="mb-1 border" key={index}>
            <p className="p-4 text-xl text-center text-gray-800">
              {format(new Date(key), "ccc, MMM do")}
            </p>
            <ul>
              {groupTimesByEndDate(timeSlots)[key].map((date, index) => (
                <li key={index}>
                  <button type="button" className="mb-2 border">
                    <p>{date.start_time}</p>
                    <p>{date.end_time}</p>
                  </button>
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
