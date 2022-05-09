import { useState, useEffect } from "react";

const useTimeZone = (url) => {
  const [timeZone, setTimeZone] = useState([]);

  useEffect(() => {
    const fetchTimeZone = async () => {
      const rsp = await fetch(url);
      const tz = await rsp.json();
      setTimeZone(tz);
    };
    fetchTimeZone();
  },[url]);

  return timeZone;
};

export default useTimeZone;