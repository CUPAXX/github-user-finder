/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import styles from "./page.module.css";
import UserCard from "@src/components/card/userCard/userCard";
import { useSearchStore } from "@src/stores/useSearchStore";
import { apiSearchUsername } from "@src/services/api/search";
import { isEmpty } from "lodash";

export default function Home() {
  const searchData = useSearchStore((state) => state.searchData);
  const updateData = useSearchStore((state) => state.updateData);
  const searchInput = useSearchStore((state) => state.searchInput);
  const isLoading = useSearchStore((state) => state.isLoading);
  const updateIsLoading = useSearchStore((state) => state.updateIsLoading);

  const nextPage = () => {
    if (Math.ceil(searchData.total_count / 12) > searchData.current_page) {
      updateIsLoading();
      apiSearchUsername({
        username: searchInput,
        page: searchData.current_page + 1,
      }).then((res) => {
        const page = searchData.current_page + 1;
        const next_page = Math.ceil(res.total_count / 12) > page;
        const prev_page = page > 1;
        const resData = {
          current_page: page,
          next_page,
          prev_page,
          items: res.items.map((res: any) => ({
            avatar_url: res.avatar_url,
            login: res.login,
            id: res.id,
          })),
          total_count: res.total_count,
        };
        updateData(resData);
        updateIsLoading();
      });
    }
  };

  const prevPage = () => {
    if (searchData.current_page > 1) {
      updateIsLoading();
      apiSearchUsername({
        username: searchInput,
        page: searchData.current_page - 1,
      }).then((res) => {
        const page = searchData.current_page - 1;
        const next_page = Math.ceil(res.total_count / 12) > page;
        const prev_page = page > 1;
        const resData = {
          current_page: page,
          next_page,
          prev_page,
          items: res.items.map((res: any) => ({
            avatar_url: res.avatar_url,
            login: res.login,
            id: res.id,
          })),
          total_count: res.total_count,
        };
        updateData(resData);
        updateIsLoading();
      });
    }
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className="parentLoader">
          <div className="loader" />
        </div>
      </div>
    );
  }

  if (isEmpty(searchData.items) && !isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.emptySearch}>Start Findings</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {!isEmpty(searchData.items) && (
        <div className={styles.resultsInfo}>
          Found <span> {searchData.total_count}</span> results for
          <span> {searchInput}</span>
        </div>
      )}
      <section className={styles.mainSection}>
        <div className={styles.containerResults}>
          {searchData.items.map((res: any) => (
            <UserCard data={res} key={res.id} />
          ))}
        </div>

        <div className={styles.containerPagination}>
          <button disabled={!searchData.prev_page} onClick={() => prevPage()}>
            <BiSolidLeftArrow size={20} />
            <p>Prev</p>
          </button>
          <button disabled={!searchData.next_page} onClick={() => nextPage()}>
            <p>Next</p>
            <BiSolidRightArrow size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
