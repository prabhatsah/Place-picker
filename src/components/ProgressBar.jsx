import { useEffect, useState } from "react";

export default function Progress() {
  const [remainingTime, setRemainingTime] = useState(3000);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Set");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <progress value={remainingTime} max={3000} />;
}
