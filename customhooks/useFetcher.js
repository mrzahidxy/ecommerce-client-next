import axios from "axios";
import useSWR from "swr";

const fetcher = ([url, token]) => {
  console.log("url & token", url, token);
  return axios
    .get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};
export function useFetcher([url, token]) {
  const { data, error, isLoading } = useSWR(
    [`https://ecommerce-mern-api.vercel.app/api/${url}`, token],
    fetcher
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}
