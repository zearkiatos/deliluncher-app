import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchMeals = async () => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    setData(jsonResponse);
    setLoading(false);
  };
  useEffect(() => {
    fetchMeals();
  }, []);

  return { loading, data };
};

export default useFetch;
