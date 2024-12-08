import axios from "axios";

export const https = (isUseToken = true) => {
  const headers: any = {};
  if (isUseToken) {
    headers.authorization = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;
  }
  return axios.create({
    headers,
  });
};
