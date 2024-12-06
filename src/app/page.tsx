import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import styles from "./page.module.css";
import UserCard from "@src/components/card/userCard/userCard";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.emptySearch}>Start Findings</div> */}

      <div className={styles.resultsInfo}>
        Found 2000 results for
        <span> CUPAXX</span>
      </div>
      <section>
        <div className={styles.containerResults}>
          {Array(12)
            .fill(0)
            .map((res, i) => (
              <UserCard key={i} />
            ))}
        </div>

        <div className={styles.containerPagination}>
          <button>
            <BiSolidLeftArrow size={20} />
            <p>Prev</p>
          </button>
          <button>
            <p>Next</p>
            <BiSolidRightArrow size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
