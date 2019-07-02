import * as React from "react";
import styles from "./resultItemView.module.scss";

interface IResultItemViewProps {
  imageUrl: string;
  title: string;
  price: string;
}

export default class ResultItemView extends React.Component<IResultItemViewProps, {}> {
  public render(): React.ReactElement<IResultItemViewProps> {
    return (
      <article className={styles.item}>
        <div style={{ backgroundImage: `url("${this.props.imageUrl}")` }} />
        <h3>{this.props.title}</h3>
        <h4>{this.props.price || "FREE"}</h4>
      </article>
    );
  }
}
