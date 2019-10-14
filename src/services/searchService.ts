import { sp } from '@pnp/sp';

export const searchItems = async (query: string) => {
  const results = await sp.search({
    Querytext: `${query}* (Path:"https://ltdan.sharepoint.com/sites/TripDestinations/Destinations library*" AND FileType:jpg)`,
    SelectProperties: ['DefaultEncodingURL', 'Title']
  });

  return results.PrimarySearchResults.map(x => ({
    title: x.Title,
    imageUrl: x['DefaultEncodingURL']
  }));
};
