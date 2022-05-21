import { format } from "date-fns";
import { useState, useEffect } from "react";

const CurrentLocalTime = () => {
  const [currentLocalTime, setCurrentLocalTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentLocalTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  });
  return (
    <div className="flex items-center">
      <p className="ml-auto text-xs text-gray-600">
        Your local time: {format(currentLocalTime, "HH:mm")}
      </p>
      <p className="w-3 h-3 p-px ml-2 bg-gray-100 border border-gray-300 rounded-full">
        <span className="block w-full h-full bg-green-200 rounded-full animate-ping"></span>
      </p>
    </div>
  );
};

export default CurrentLocalTime;
