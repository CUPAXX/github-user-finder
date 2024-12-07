/* eslint-disable @typescript-eslint/no-explicit-any */
import { https } from "@src/helpers/https";

interface params {
  username: string;
  page: number;
}

export const apiSearchUsername = async ({ username, page = 1 }: params) => {
  const results = await https().get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/search/users?q=${username}&per_page=12&page=${page}`
  );

  return results.data;
};
