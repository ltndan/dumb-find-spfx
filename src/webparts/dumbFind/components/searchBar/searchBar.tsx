import * as React from "react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import * as strings from "DumbFindWebPartStrings";

interface ISearchBarProps {
  onSearch: (value: string) => void;
}

interface ISearchBarState {
  value: string;
}

export default class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);

    this.state = {
      value: "",
    };
  }

  public render(): React.ReactElement<ISearchBarProps> {
    return (
      <React.Fragment>
        <SearchBox
          placeholder={strings.searchLowerCase}
          value={this.state.value}
          onChange={(_event, value) => this.setState({ value })}
          onSearch={() => this.props.onSearch(this.state.value)}
        />
      </React.Fragment>
    );
  }
}
