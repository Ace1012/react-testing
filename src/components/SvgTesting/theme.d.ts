import { Theme, ThemeOptions } from "@mui/material/styles";
import { Palette } from "@material-ui/core/styles/createPalette";

interface IPallate extends Palatte {
  yomama?: {
    soFat: string;
  };
}

interface ITheme extends Theme {
  palette: IPallate;
}

interface IThemeOptions extends ThemeOptions {
  palette: IPallate;
}

declare module "@mui/material/styles" {
  interface Theme {
    palette: IPallate;
  }

  interface ThemeOptions {
    palette: IPallate;
  }
  export function createTheme(options?: IThemeOptions): ITheme;
}
