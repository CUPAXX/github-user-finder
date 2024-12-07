import { https } from "@src/helpers/https";

export const apiListRepo = async (username: string) => {
  const results = await https().get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${username}/repos`
  );

  return results.data;
};
