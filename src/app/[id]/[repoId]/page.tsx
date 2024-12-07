"use client";

import { MarkdownRenderer } from "@src/components/markdown/markdownRenderer";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const Page = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/CUPAXX/cpx-architects-backend/refs/heads/master/readme.md"
    )
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.detailRepo}>
        <h1>Application-Backend</h1>
        <p className={styles.repoDesc}>
          ini deksripsi dari repo ini, dibuat menggunakan teknologi ini dan ini
          untuk ini
        </p>
        <p className={styles.repoDate}>Created: 20/12/2000</p>
        <p className={styles.repoDate}>Last Update: 22/12/2000</p>
        <div className={styles.parentRepoButton}>
          <div className={styles.repoButton}>Open in GitHub</div>
          <div className={styles.repoButton}>Clone</div>
        </div>
      </div>

      <div className={styles.containerReadme}>
        <div className={styles.readmeLabel}>
          <h1>Readme</h1>
        </div>

        <div className={styles.readmeContent}>
          <MarkdownRenderer>{markdownContent}</MarkdownRenderer>
        </div>
      </div>
    </div>
  );
};

export default Page;
