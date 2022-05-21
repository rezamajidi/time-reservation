import { format } from "date-fns";

const TimeSlot = ({ start, end, disabled, selected, onToggle }) => {
  return (
    <button
      onClick={() => onToggle({ start, end })}
      type="button"
      className={`group relative flex items-center w-full py-4 overflow-hidden transition-colors duration-300 bg-gray-100 border rounded-sm  justify-evenly ${
        selected
          ? "border-green-300 border-dashed bg-green-100"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      <p>{format(new Date(start), "HH:mm")}</p>
      <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      <p>{format(new Date(end), "HH:mm")}</p>
      {disabled && <div className="absolute inset-0 bg-red-100"></div>}
      {selected && (
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-green-100 opacity-0 group-hover:opacity-75">
          click to cancel this time
        </div>
      )}
    </button>
  );
};

export default TimeSlot;
