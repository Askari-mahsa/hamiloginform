import axios from "axios";
import { useState, useEffect } from "react";

//custom hook for api call and loading and error

export const useApi = (url) => {
      const [data, setData] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");

      useEffect(() => {
            const fetchData = async () => {
                  setIsLoading(true);
                  try {
                        const result = await axios(url);
                        setData(result.data);
                  } catch (error) {
                        setError(error);
                  }
                  setIsLoading(false);
            };
            fetchData();
      }, [url]);

      return { data, isLoading, error };
};
