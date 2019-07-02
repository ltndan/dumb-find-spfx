declare interface IDumbFindWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  searchLowerCase: string;
}

declare module "DumbFindWebPartStrings" {
  const strings: IDumbFindWebPartStrings;
  export = strings;
}
