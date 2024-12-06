import Image from "next/image";
import styles from "./userCard.module.css";
import Link from "next/link";

const UserCard = () => {
  return (
    <Link href={"/cupaxx"} className={styles.container}>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/56408053?v=4"
          width={100}
          height={100}
          alt="Picture of the author"
          className={styles.image}
        />
      </div>
      <div>
        <h1>Muhamad Fiqry Arahmansyah</h1>
      </div>
    </Link>
  );
};

export default UserCard;
