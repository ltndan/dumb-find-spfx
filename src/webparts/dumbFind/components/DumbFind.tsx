import * as React from "react";
import styles from "./DumbFind.module.scss";
import { IDumbFindProps } from "./IDumbFindProps";
import SearchBar from "../components/searchBar/searchBar";
import pnp from "sp-pnp-js";
import { ResultItem } from "../models/resultItem";
import { ResultItemView } from "../components/resultItem/resultItemView";

interface IDumbFindState {
  resultItems: ResultItem[];
  loading: boolean;
}

export default class DumbFind extends React.Component<IDumbFindProps, IDumbFindState> {
  constructor(props: IDumbFindProps) {
    super(props);

    this.state = {
      resultItems: [],
      loading: false,
    };
  }

  public componentDidMount() {}

  private async searchItems(searchQuery: string) {}

  public render(): React.ReactElement<IDumbFindProps> {
    return <React.Fragment>do me</React.Fragment>;
  }
}
