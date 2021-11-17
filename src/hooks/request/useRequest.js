import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

/**
 * @name useRequest
 *
 * @param {*} { requestId, url, method }
 * @return {*}
 */

const useRequest = ({ requestId, url, method, body, params, headers }) => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries(requestId);
  const { data, isLoading, error, refetch } = useQuery(
    requestId || "default",
    () =>
      axios({
        headers,
        params,
        method,
        data: body,
        url: url || "127.0.0.1",
      }).then((res) => res),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      cacheTime: 0,
      isCached: false,
    }
  );

  if (error) {
    return { data: error, refetch, isLoading, error };
  }

  return { data, isLoading, error, refetch };
};

export default useRequest;
