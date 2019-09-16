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

  public componentDidMount() {
    this.searchItems("");
  }

  private async searchItems(searchQuery: string) {
    this.setState({ loading: true });
    const results = await pnp.sp.search({
      Querytext: `${searchQuery}* (Path:"https://ltdan.sharepoint.com/sites/TripDestinations/Destinations library*" AND FileType:jpg)`,
      SelectProperties: ["DefaultEncodingURL", "Title", "Price"],
    });
    const primaryResults = results.PrimarySearchResults;
    const resultItems = primaryResults.map(x => {
      return { imageUrl: x["DefaultEncodingURL"], title: x.Title, price: x["Price"] };
    });
    this.setState({ resultItems, loading: false });
  }

  public render(): React.ReactElement<IDumbFindProps> {
    return (
      <React.Fragment>
        <SearchBar onSearch={value => this.searchItems(value)} />
        <section className={`${styles.resultsContainer} ${this.state.loading ? styles.blurred : ""}`}>
          {this.state.resultItems.map(x => (
            <ResultItemView {...x} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
