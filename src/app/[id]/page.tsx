"use client";

import styles from "./page.module.css";
import Image from "next/image";
import RepoCard from "@src/components/card/repoCard/repoCard";
import { useUserStore } from "@src/stores/useUserStore";
import { useParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { apiDetailUser } from "@src/services/api/users";
import { isEmpty } from "lodash";
import { apiListRepo } from "@src/services/api/repos";
import { repoData, useRepoStore } from "@src/stores/useReposStore";

const Page = () => {
  const params = useParams<{ id: string }>();
  const userData = useUserStore((state) => state.userData);
  const updateUserData = useUserStore((state) => state.updateUserData);
  const isLoading = useUserStore((state) => state.isLoading);
  const updateIsLoading = useUserStore((state) => state.updateIsLoading);
  const listRepo = useRepoStore((state) => state.listRepo);
  const updatelistRepo = useRepoStore((state) => state.updatelistRepo);
  const isLoadingRepo = useRepoStore((state) => state.isLoading);
  const updateIsLoadingRepo = useRepoStore((state) => state.updateIsLoading);

  useEffect(() => {
    loadDetailUser();
    loadListRepo();
    if (isEmpty(params.id)) {
      updateIsLoading(false);
      updateIsLoadingRepo(false);
    }
  }, [params.id]);

  const loadDetailUser = useCallback(() => {
    updateIsLoading(true);
    apiDetailUser(params.id).then((res) => {
      const resData = {
        avatar_url: res.avatar_url,
        profile_url: `https://github.com/${res.login}`,
        bio: res.bio,
        login: res.login,
        repos_url: res.repo_url,
        name: res.name,
      };
      updateUserData(resData);
      updateIsLoading(false);
    });
  }, []);

  const loadListRepo = useCallback(() => {
    updateIsLoadingRepo(true);
    apiListRepo(params.id).then((res) => {
      const resData = res.map((val: repoData) => ({
        name: val.name,
        description: val.description,
        language: val.language,
        stargazers_count: val.stargazers_count,
        forks_count: val.forks_count,
        created_at: val.created_at,
        updated_at: val.updated_at,
        html_url: val.html_url,
      }));
      updatelistRepo(resData);
      updateIsLoadingRepo(false);
    });
  }, []);

  if (isLoading && isLoadingRepo) {
    return (
      <div className={styles.container}>
        <div className="parentLoader">
          <div className="loader" />
        </div>
      </div>
    );
  }

  if (isEmpty(userData.login)) {
    return (
      <div className={styles.container}>
        <div className="not-found">404 Not Found</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerProfile}>
        <Image
          src={
            !isEmpty(userData.avatar_url)
              ? userData.avatar_url
              : "https://avatars.githubusercontent.com/u/56408053?v=4"
          }
          width={100}
          height={100}
          alt="Picture of the author"
          className={styles.image}
        />
        <div className={styles.containerDetailProfile}>
          <h1>{userData.name}</h1>
          <p className={styles.username}>@{userData.login}</p>
          <p>{userData.bio}</p>
        </div>
      </div>
      <div className={styles.repository}>Repositories</div>
      <div className={styles.containerRepository}>
        {!isEmpty(listRepo) &&
          listRepo.map((res, i) => <RepoCard data={res} key={i} />)}
      </div>
    </div>
  );
};

export default Page;
