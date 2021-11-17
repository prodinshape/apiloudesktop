import useSWR from "swr";

export default function useRequest({ url, method, headers, body }) {
  const fetcher = () =>
    fetch(url, {
      method,
      headers,
      body,
    }).then((res) => res.json());

  const { data, mutate, error, isValidating } = useSWR(url, fetcher);
  const isLoading = !data && !error && isValidating;

  return {
    isLoading,
    data,
    mutate,
    error,
  };
}
