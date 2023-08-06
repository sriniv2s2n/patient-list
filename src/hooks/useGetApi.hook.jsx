import { useEffect, useState, useRef } from "react";

function useGetApi(url, formatterFn) {
  const timerId = useRef(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const parsedResponse = await res.json();
        const resData = formatterFn
          ? formatterFn(parsedResponse)
          : parsedResponse;
        setError(null);
        setData(resData);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    timerId.value = setTimeout(fetchData, 350);

    return () => {
      clearTimeout(timerId.value);
    };
  }, [url, formatterFn]);

  return { isLoading, data, error };
}

export default useGetApi;
