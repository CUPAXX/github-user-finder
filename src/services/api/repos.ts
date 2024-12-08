import { https } from "@src/helpers/https";

export type apiDetailRepo = {
  username: string;
  repoName: string;
};

export const apiListRepo = async (username: string) => {
  const results = await https().get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${username}/repos`
  );

  return results.data;
};

export const apiDetailRepo = async ({ username, repoName }: apiDetailRepo) => {
  const results = await https().get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/repos/${username}/${repoName}`
  );

  return results.data;
};
