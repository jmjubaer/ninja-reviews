import { useEffect, useState } from "react";

const UseFetch = (uri) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setReFetch] = useState(null);
  const ReFetch = () => {
    setReFetch(!refetch);
  };
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(uri);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [refetch,uri]);
  return { data, loading, error, ReFetch };
};

export default UseFetch;
