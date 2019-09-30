import { SearchBox } from 'office-ui-fabric-react';
import React from 'react';

interface ISearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = (props: ISearchBarProps) => (
  <SearchBox
    onChange={(_event, value) => props.onChange(value)}
    value={props.value}
  ></SearchBox>
);
