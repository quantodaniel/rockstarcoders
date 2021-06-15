import { useState, useEffect, useCallback, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

const useCurrentRatingParams = () => {
  const { search } = useLocation();

  return useMemo(() => {
    const params = new URLSearchParams(search);
    return params.get("rating") || 0;
  }, [search]);
};

const useCurrentSearchParams = () => {
  const { search } = useLocation();

  return useMemo(() => {
    const params = new URLSearchParams(search);
    return params.get("q") || "";
  }, [search]);
};

const useDebounceSearchParams = () => {
  const updatedParams = useCurrentSearchParams();

  const [debounceQuery, setDebounceQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceQuery(updatedParams);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [updatedParams]);

  return debounceQuery;
};

const useUpdateSearchParams = () => {
  const history = useHistory();
  const { search } = useLocation();

  return useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(search);
      params.delete(key);

      if (value) {
        params.append(key, value);
      }

      history.push({ search: params.toString() });
    },
    [history, search]
  );
};

export const useQueryParams = () => {
  const updateParams = useUpdateSearchParams();
  const updatedRating = useCurrentRatingParams();
  const updatedParams = useCurrentSearchParams();
  const debounceParams = useDebounceSearchParams();

  return {
    get: () => updatedParams,
    getDebounce: () => debounceParams,
    getRating: () => updatedRating,
    set: updateParams,
  };
};
