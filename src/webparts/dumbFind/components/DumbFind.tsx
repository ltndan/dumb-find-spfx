import * as React from "react";
import styles from "./DumbFind.module.scss";
import { IDumbFindProps } from "./IDumbFindProps";
import SearchBar from "../components/searchBar/searchBar";
import pnp, { SearchQuery, SearchResults, SearchQueryBuilder, SearchProperty } from "sp-pnp-js";
import { ResultItem } from "../models/resultItem";
import ResultItemView from "../components/resultItem/resultItemView";

interface IDumbFindState {
  resultItems: ResultItem[];
}

export default class DumbFind extends React.Component<IDumbFindProps, IDumbFindState> {
  constructor(props: IDumbFindProps) {
    super(props);

    this.state = {
      resultItems: [],
    };
  }

  public componentDidMount() {
    this.searchItems("*");
  }

  private async searchItems(searchQuery: string) {
    const results = await pnp.sp.search({
      Querytext: `Path:"https://ltdan.sharepoint.com/sites/TripDestinations/Destinations library*" AND FileType:jpg AND Title:"*${searchQuery}*"`,
      SelectProperties: ["DefaultEncodingURL", "Title", "Price"],
    });
    const primaryResults = results.PrimarySearchResults;
    const resultItems = primaryResults.map(x => {
      return { imageUrl: x["DefaultEncodingURL"], title: x.Title, price: x["Price"] };
    });
    this.setState({ resultItems });
  }

  public render(): React.ReactElement<IDumbFindProps> {
    return (
      <React.Fragment>
        <SearchBar onSearch={value => this.searchItems(value)} />
        <section className={styles.resultsContainer}>
          {this.state.resultItems.map(x => (
            <ResultItemView {...x} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
