import styles from "./page.module.css";
import Image from "next/image";
import RepoCard from "@src/components/card/repoCard/repoCard";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerProfile}>
        <Image
          src="https://avatars.githubusercontent.com/u/56408053?v=4"
          width={100}
          height={100}
          alt="Picture of the author"
          className={styles.image}
        />
        <div className={styles.containerDetailProfile}>
          <h1>Muhamad Fiqry Arahmansyah</h1>
          <p className={styles.username}>@CUPAXX</p>
          <p>
            Has 2+ years of working experience in the IT Field as a Frontend
            Developer & Mobile Developer. Experienced in using ReactJs, React
            Native
          </p>
        </div>
      </div>
      <div className={styles.repository}>Repositories</div>
      <div className={styles.containerRepository}>
        {Array(3)
          .fill(0)
          .map((res, i) => (
            <RepoCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default Page;
