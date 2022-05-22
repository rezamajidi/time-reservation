import { memo } from "react";
import { format } from "date-fns";

const TimeSlot = ({ start, end, disabled, selected, onToggle }) => {
  return (
    <div className="relative group">
      <button
        onClick={() => onToggle({ start, end })}
        type="button"
        disabled={disabled}
        className={`flex items-center w-full py-4 overflow-hidden transition-colors duration-300 bg-gray-100 border rounded-sm justify-evenly ${
          selected
            ? "border-green-300 border-dashed bg-green-100"
            : "bg-gray-100 hover:bg-gray-200"
        } ${disabled ? "  cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span>{format(new Date(start), "HH:mm")}</span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span>{format(new Date(end), "HH:mm")}</span>
      </button>
      {disabled && (
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-gray-400 to-transparent bg-opacity-20"></div>
      )}
      {selected && (
        <button
          type="button"
          onClick={() => onToggle({ start, end })}
          className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-green-100 opacity-0 group-hover:opacity-75"
        >
          click to cancel this time
        </button>
      )}
    </div>
  );
};

function slotPropsAreEqual(prevSlot, nextSlot) {
  return (
    prevSlot.start === nextSlot.start &&
    prevSlot.end === nextSlot.end &&
    prevSlot.disabled === nextSlot.disabled &&
    prevSlot.selected === nextSlot.selected
  );
}
const MemoizedTimeSlot = memo(TimeSlot, slotPropsAreEqual);

export default MemoizedTimeSlot;
