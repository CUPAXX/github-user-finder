"use client";

import { MarkdownRenderer } from "@src/components/markdown/markdownRenderer";
import styles from "./page.module.css";
import { useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import { repoData, useRepoStore } from "@src/stores/useReposStore";
import { apiDetailRepo } from "@src/services/api/repos";
import moment from "moment";
import Link from "next/link";
import { apiFindReadme, apiReadmeData } from "@src/services/api/readme";
import { useReadmeStore } from "@src/stores/useReadmeStore";
import { isEmpty } from "lodash";

const Page = () => {
  const params = useParams<{ id: string; repoId: string }>();
  const detailRepo = useRepoStore((state) => state.detailRepo);
  const updateDetailRepo = useRepoStore((state) => state.updateDetailRepo);
  const isLoadingRepo = useRepoStore((state) => state.isLoading);
  const updateIsLoadingRepo = useRepoStore((state) => state.updateIsLoading);

  const readmeData = useReadmeStore((state) => state.readmeData);
  const updateReadmeData = useReadmeStore((state) => state.updateReadmeData);
  const isLoadingReadme = useReadmeStore((state) => state.isLoading);
  const updateIsloadingReadme = useReadmeStore(
    (state) => state.updateIsLoading
  );

  useEffect(() => {
    loadDetailRepo();
  }, [params.id, params.repoId]);

  const loadDetailRepo = useCallback(() => {
    updateIsLoadingRepo(true);
    apiDetailRepo({ username: params.id, repoName: params.repoId }).then(
      (res: repoData) => {
        const resData = {
          name: res.name,
          description: res.description,
          created_at: res.created_at,
          updated_at: res.updated_at,
          html_url: res.html_url,
          language: "",
          stargazers_count: 0,
          forks_count: 0,
        };
        updateDetailRepo(resData);
        updateIsLoadingRepo(false);
        findReadme();
      }
    );
  }, []);

  const findReadme = useCallback(() => {
    apiFindReadme({ username: params.id, repoName: params.repoId }).then(
      (res) => {
        if (!isEmpty(res)) loadReadme(res.download_url);
      }
    );
  }, []);

  const loadReadme = useCallback((url: string) => {
    updateIsloadingReadme(true);
    apiReadmeData(url).then((res) => {
      updateReadmeData(res);
      updateIsloadingReadme(false);
    });
  }, []);

  if (isLoadingRepo) {
    return (
      <div className={styles.container}>
        <div className="parentLoader">
          <div className="loader" />
        </div>
      </div>
    );
  }

  const SectionReadme = () => {
    if (isLoadingReadme) {
      return (
        <div className="parentLoader">
          <div className="loader" />
        </div>
      );
    }
    return (
      <div className={styles.containerReadme}>
        <div className={styles.readmeLabel}>
          <h1>Readme</h1>
        </div>

        <div className={styles.readmeContent}>
          <MarkdownRenderer>{readmeData}</MarkdownRenderer>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.detailRepo}>
        <h1>{detailRepo.name}</h1>
        <p className={styles.repoDesc}>{detailRepo.description}</p>
        <p className={styles.repoDate}>
          Created: {moment(detailRepo.created_at).format("DD MMMM YYYY")}
        </p>
        <p className={styles.repoDate}>
          Last Update: {moment(detailRepo.updated_at).format("DD MMMM YYYY")}
        </p>
        <div className={styles.parentRepoButton}>
          <Link href={detailRepo.html_url} className={styles.repoButton}>
            Open in GitHub
          </Link>
        </div>
      </div>
      <SectionReadme />
    </div>
  );
};

export default Page;
