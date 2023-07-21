export interface IRedditComment {
  comment: string;
  replies: IRedditComment[];
}

export enum ThemeProperties {
  PRIMARY = "--primary",
  SECONDARY = "--secondary",
  TERTIARY = "--tertiary",
}
