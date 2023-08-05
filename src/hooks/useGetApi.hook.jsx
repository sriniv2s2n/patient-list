import { useEffect, useState } from "react";

function useGetApi(url, formatterFn) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const parsedResponse = await res.json();
        let resData = parsedResponse;
        if (formatterFn) {
          resData = formatterFn(resData);
        }
        setError(null);
        setData(resData);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, formatterFn]);

  return { isLoading, data, error };
}

export default useGetApi;
