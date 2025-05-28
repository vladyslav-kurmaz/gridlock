import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";
import { timeAtom } from "../../atoms/atoms";

const formatTime = (seconds) => {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')
  return `${hours}:${mins}:${secs}`
}

const TimeCard = ({level}) => {
    const [time, setTime] = useAtom(timeAtom)
  
    useEffect(() => {
      const getInfo = localStorage.getItem(`${level}-info`)
      ? JSON.parse(localStorage.getItem(`${level}-info`))
      : undefined
      const storedTime = getInfo ? getInfo.time : undefined
  
      if (storedTime && storedTime !== 'undefined') {
        setTime(parseInt(storedTime, 10))
      }
    }, [setTime, level])

  return (
    <div className="flex flex-row items-center px-4 py-2 text-majky-600 dark:text-white lg:rounded lg:border lg:border-majky-600  lg:bg-majky-600 lg:text-2xl lg:text-white lg:shadow-lg lg:dark:bg-transparent lg:dark:text-majky-600">
      <div className="text-center">
        <FontAwesomeIcon icon={faStopwatch} className="mr-2" />
        {formatTime(time)}
      </div>
    </div>
  );
};

export default TimeCard;
