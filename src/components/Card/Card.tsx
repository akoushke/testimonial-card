import styles from "./card.module.css";
import Image from "next/image";

type PropType = {
  image: string;
  name: string;
  handle: string;
  content: string;
};

export default function Card({image, name, handle, content}: PropType) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image
          src={image}
          alt="avatar"
          className={styles.avatar}
          width={48}
          height={48}
        />
        <div className={styles.meta}>
          <h2 className={styles.name}>{name}</h2>
          <p className={[styles.handle, "text-neutral-600"].join(" ")}>
            {handle}
          </p>
        </div>
      </div>
      <p className={[styles.content, "text-neutral-600"].join(" ")}>
        {content}
      </p>
    </div>
  );
}
