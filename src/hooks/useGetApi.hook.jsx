import { useEffect, useState } from "react";

function useGetApi(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const parsedResponse = await res.json();
        const data = parsedResponse.entry.map((entry) => entry.resource);
        setError(null);
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}

export default useGetApi;
