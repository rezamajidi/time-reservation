import { useContext } from "react";
import { groupTimesByEndDate } from "../helpers/utils";
import { format, isEqual, areIntervalsOverlapping } from "date-fns";
import CompanyHeader from "./CompanyHeader.jsx";
import TimeSlot from "./TimeSlot.jsx";
import CompanyContext from "../CompanyContext";

const CompanyColumn = ({ id, name, type, timeSlots }) => {
  const { companies, setCompanies } = useContext(CompanyContext);
  const thisCompany = companies.find((company) => company.id === id);

  const ifTimeSlotEqualToSelected = (start, end) => {
    if (!thisCompany.selected_slot) {
      return false;
    }
    return (
      isEqual(new Date(start), thisCompany.selected_slot.start) &&
      isEqual(new Date(end), thisCompany.selected_slot.end)
    );
  };

  const isTimeOverlapWithSelectedTimes = (start, end) => {
    const selectedSlots = companies
      .filter((company) => company.selected_slot)
      .map((company) => company.selected_slot);

    return selectedSlots.some((timeSlot) => {
      return areIntervalsOverlapping(
        { start: new Date(start), end: new Date(end) },
        { start: timeSlot.start, end: timeSlot.end }
      );
    });
  };

  const toggleTimeSlot = ({ start, end }) => {
    const thisCompanyIndex = companies.findIndex((com) => com.id === id);
    const newCompanies = [...companies];
    if (ifTimeSlotEqualToSelected(start, end)) {
      newCompanies[thisCompanyIndex].selected_slot = null;
    } else {
      newCompanies[thisCompanyIndex].selected_slot = {
        start: new Date(start),
        end: new Date(end),
      };
    }
    setCompanies(newCompanies);
  };

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
        {thisCompany && thisCompany.selected_slot ? (
          <TimeSlot
            selected={true}
            onToggle={toggleTimeSlot}
            start={thisCompany.selected_slot.start}
            end={thisCompany.selected_slot.end}
          />
        ) : (
          <div className="h-[58px] border rounded-md flex items-center justify-center">
            <p className="text-sm text-gray-700">No time selected yet</p>
          </div>
        )}
      </div>
      <p className="mt-10 mb-2 text-sm text-gray-700">Available time slots</p>
      <div className="relative overflow-hiden h-96">
        <div className="h-full pb-12 overflow-y-auto">
          {Object.keys(groupTimesByEndDate(timeSlots)).map(
            (dateKey, groupIndex) => (
              <div className="mb-1" key={`c-${thisCompany.id}-${groupIndex}`}>
                <p className="sticky top-0 z-50 p-4 mb-2 text-xl text-center text-gray-800 border border-indigo-100 rounded-sm bg-indigo-50">
                  {format(new Date(dateKey), "ccc, MMM do")}
                </p>
                <ul>
                  {groupTimesByEndDate(timeSlots)[dateKey].map(
                    (date, index) => (
                      <li
                        className="mb-2"
                        key={`c-${thisCompany.id}-${groupIndex}-${index}`}
                      >
                        <TimeSlot
                          selected={
                            thisCompany.selected_slot &&
                            ifTimeSlotEqualToSelected(
                              date.start_time,
                              date.end_time
                            )
                          }
                          disabled={
                            (thisCompany.selected_slot &&
                              !ifTimeSlotEqualToSelected(
                                date.start_time,
                                date.end_time
                              )) ||
                            (!thisCompany.selected_slot &&
                              isTimeOverlapWithSelectedTimes(
                                date.start_time,
                                date.end_time
                              ))
                          }
                          onToggle={toggleTimeSlot}
                          start={date.start_time}
                          end={date.end_time}
                        />
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyColumn;
