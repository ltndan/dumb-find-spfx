import React, { useEffect, useState } from 'react';
import { Gallery } from '../../../components/gallery/gallery';
import { SearchBar } from '../../../components/searchbar';
import { IItem } from '../../../interfaces/item';
import { searchItems } from '../../../services/searchService';

export const DumbFind = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    search();
  }, [query]);

  const search = async () => {
    const results = await searchItems(query);
    setItems(results);
  };

  return (
    <React.Fragment>
      <SearchBar value={query} onChange={setQuery}></SearchBar>
      <Gallery items={items}></Gallery>
    </React.Fragment>
  );
};
