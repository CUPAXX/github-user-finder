import { https } from "@src/helpers/https";

export const apiDetailUser = async (username: string) => {
  const results = await https().get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${username}`
  );

  return results.data;
};
