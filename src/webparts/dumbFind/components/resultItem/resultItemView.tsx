import * as React from "react";
import styles from "./resultItemView.module.scss";

interface IResultItemViewProps {
  imageUrl: string;
  title: string;
  price: string;
}

export const ResultItemView = (props: IResultItemViewProps) => (
  <article className={styles.item}>
    <div style={{ backgroundImage: `url("${props.imageUrl}")` }} />
    <h3>{props.title}</h3>
    <h4>{props.price || "FREE"}</h4>
  </article>
);
