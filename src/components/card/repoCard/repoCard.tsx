import styles from "./repoCard.module.css";
import { FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import Link from "next/link";
import { repoData } from "@src/stores/useReposStore";
import moment from "moment";
import { useUserStore } from "@src/stores/useUserStore";

type data = {
  data: repoData;
};

const RepoCard = ({ data }: data) => {
  const userData = useUserStore((state) => state.userData);
  return (
    <Link href={`/${userData.login}/${data.name}`} className={styles.container}>
      <h3>{data.name}</h3>
      <p className={styles.repoDescription}>{data.description}</p>
      <div className={styles.repoFooter}>
        <div className={styles.repoCode}>
          <p>{data.language}</p>
          <div>
            <FaStar /> {data.stargazers_count}
          </div>
          <div>
            <FaCodeFork /> {data.forks_count}
          </div>
        </div>
        <p>Last push {moment(data.updated_at, "YYYYMMDD").fromNow()}</p>
      </div>
    </Link>
  );
};

export default RepoCard;
