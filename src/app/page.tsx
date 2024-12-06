import { FaGithub,FaSearch  } from "react-icons/fa";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <div className={styles.logo}>
          <FaGithub size={45} />
          <h1>GitHub User Finder</h1>
        </div>

        <div className={styles.searchContainer}>
          <input placeholder="Search for a user, e.g. Cupaxx" />
          <FaSearch size={18}/>
        </div>
      </header>
      <div className={styles.emptySearch}>Start Findings</div>
    </div>
  );
}
