/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FaGithub, FaSearch } from "react-icons/fa";
import styles from "./header.module.css";
import { useSearchStore } from "@src/stores/useSearchStore";
import { apiSearchUsername } from "@src/services/api/search";
import { isEmpty } from "lodash";

const Header = () => {
  const updateData = useSearchStore((state) => state.updateData);
  const searchData = useSearchStore((state) => state.searchData);
  const searchInput = useSearchStore((state) => state.searchInput);
  const updateSearchInput = useSearchStore((state) => state.updateSearchInput);
  const resetSearchData = useSearchStore((state) => state.resetSearchData);
  const updateIsLoading = useSearchStore((state) => state.updateIsLoading);

  const onSubmit = (code: string) => {
    if (!isEmpty(searchInput) && code === "Enter") {
      updateIsLoading();
      apiSearchUsername({ username: searchInput, page: 1 }).then((res) => {
        const page = searchData.current_page;
        const next_page = Math.ceil(res.total_count / 12) > page;
        const prev_page = page > 1;
        updateData({ ...res, next_page, prev_page, current_page: page });
        updateIsLoading();
      });
    }
    if (isEmpty(searchInput) && code === "Enter") {
      resetSearchData();
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <FaGithub size={45} />
        <h1>GitHub User Finder</h1>
      </div>

      <div className={styles.searchContainer}>
        <input
          placeholder="Search for a user, e.g. Cupaxx"
          value={searchInput}
          onChange={(e) => updateSearchInput(e.currentTarget.value)}
          onKeyDown={(e) => onSubmit(e.code)}
        />
        <button onClick={() => onSubmit("Enter")}>
          <FaSearch size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
