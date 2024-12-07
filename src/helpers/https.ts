import axios from "axios";

export const https = () => {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  };
  return axios.create({
    headers,
  });
};
