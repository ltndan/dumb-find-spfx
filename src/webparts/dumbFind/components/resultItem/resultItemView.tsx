import * as React from "react";
import styles from "./resultItemView.module.scss";

interface IResultItemViewProps {
  imageUrl: string;
  title: string;
  price: string;
}

export const ResultItemView = (props: IResultItemViewProps) => <article className={styles.item}>do me</article>;
