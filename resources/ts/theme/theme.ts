import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#009688",
      light: "#52c7b8",
      dark: "#00675b",
    },
    secondary: {
      main: "#37474f",
      light: "#62727b",
      dark: "#102027",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      '"Noto Sans JP"',
      '"Helvetica"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    h1: { fontSize: 60 },
    h2: { fontSize: 48 },
    h3: { fontSize: 42 },
    h4: { fontSize: 36 },
    h5: { fontSize: 20 },
    h6: { fontSize: 18 },
    subtitle1: { fontSize: 18 },
    body1: { fontSize: 16 },
    button: { textTransform: "none" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  },
});
