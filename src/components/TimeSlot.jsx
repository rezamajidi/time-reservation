import { format } from "date-fns";

const TimeSlot = ({ start, end }) => {
  return (
    <button
      type="button"
      className="flex items-center w-full py-4 transition-colors duration-300 bg-gray-100 border rounded-sm hover:bg-gray-200 justify-evenly"
    >
      <p>{format(new Date(start), "HH:mm")}</p>
      <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      <p>{format(new Date(end), "HH:mm")}</p>
    </button>
  );
};

export default TimeSlot;
