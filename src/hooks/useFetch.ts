import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    console.log("Calling usefetch") 
    setIsLoading(true);
    const abortController = new AbortController();

    if (url === "") return;
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then(async (response) => {
          if (response.status !== 200) {
            setIsLoading(false);
            throw new Error("Could not fetch!");
          }
          return response.json() as T;
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          console.log({ data, isLoading, error });
        })
        .catch((error) => {
          setError(`Error: ${error.message}`);
        });
    }, 2000);

    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
};
export default useFetch;
