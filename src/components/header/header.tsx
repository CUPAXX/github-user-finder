import { FaGithub, FaSearch } from "react-icons/fa";
import styles from "./header.module.css"

const Header  = () => {
    return (
        <header className={styles.headerContainer}>
        <div className={styles.logo}>
          <FaGithub size={45} />
          <h1>GitHub User Finder</h1>
        </div>

        <div className={styles.searchContainer}>
          <input placeholder="Search for a user, e.g. Cupaxx" />
          <FaSearch size={18} />
        </div>
      </header>
    )
}

export default Header