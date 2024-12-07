import Image from "next/image";
import styles from "./userCard.module.css";
import Link from "next/link";

const UserCard = ({ data }: any) => {
  return (
    <Link href={`/${data.login}`} className={styles.container}>
      <div>
        <Image
          src={data.avatar_url}
          width={100}
          height={100}
          alt="Picture of the author"
          className={styles.image}
          quality={90}
        />
      </div>
      <div>
        <h1>{data.login}</h1>
      </div>
    </Link>
  );
};

export default UserCard;
