import { https } from "@src/helpers/https";
import { apiDetailRepo } from "./repos";
import { isEmpty } from "lodash";

type apiReadmeData = {
  username: string;
};

export const apiReadmeData = async (download_url: string) => {
  const results = await https(false).get(`${download_url}`);

  return results.data;
};

export const apiFindReadme = async ({ username, repoName }: apiDetailRepo) => {
  const results = await https().get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/repos/${username}/${repoName}/contents`
  );
  if (!isEmpty(results.data)) {
    const finder = results.data.find(
      (res: any) => res.name.toLowerCase() === "readme.md"
    );
    return finder;
  }
  return {};
};
