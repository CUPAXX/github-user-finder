import styles from "./repoCard.module.css";
import { FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const RepoCard = () => {
  return (
    <div className={styles.container}>
      <h3>cpx-architects</h3>
      <p className={styles.repoDescription}>
        Find github user using username, show detail repository and display
        readme
      </p>
      <div className={styles.repoFooter}>
        <div className={styles.repoCode}>
          <p>Javascript</p>
          <div>
            <FaStar /> 0
          </div>
          <div>
            <FaCodeFork /> 0
          </div>
        </div>
        <p>Last push 11 days ago</p>
      </div>
    </div>
  );
};

export default RepoCard;
