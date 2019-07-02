import * as React from "react";
import styles from "./DumbFind.module.scss";
import { IDumbFindProps } from "./IDumbFindProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class DumbFind extends React.Component<IDumbFindProps, {}> {
  public render(): React.ReactElement<IDumbFindProps> {
    return (
      <React.Fragment>
        hello
      </React.Fragment>
    );
  }
}
