import axios from "axios";
import useSWR from "swr";

const fetcher = ([url, token]) => {
  // console.log("url & token", url, token);
  return axios
    .get(url, {
      headers: {
        token: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};
export function useGet([url, token]) {
  const { data, error, isLoading } = useSWR(
    [`https://ecommerce-mern-api.vercel.app/api/${url}`, token],
    fetcher,
    { refreshInterval: 100 }
  );

  return {
    products: data,
    isLoading: isLoading,
    isError: error,
  };
}

export function usePost([url, token, productInfo]) {
  // console.log(url, token, productInfo);

  return axios
    .post(`https://ecommerce-mern-api.vercel.app/api/${url}`, productInfo, {
      headers: {
        token: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
}

export function useUpdate([url, token, updatedProductInfo]) {
  console.log(url, token, updatedProductInfo, updatedProductInfo._id);

  return axios
    .put(
      `https://ecommerce-mern-api.vercel.app/api/${url}/${updatedProductInfo._id}`,
      updatedProductInfo,
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data);
}

export function useDelete([url, token]) {
  // console.log(url, token);

  return axios
    .delete(`https://ecommerce-mern-api.vercel.app/api/${url}`, {
      headers: {
        token: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
}
