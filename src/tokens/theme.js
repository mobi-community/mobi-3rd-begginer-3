import { createTheme } from "@mui/material";
import { blue, green, orange, purple, red, yellow } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      light: blue[200],
      base: blue[500],
      weight: blue[900],
    },
    secondary: {
      main: yellow[700],
      light: yellow[200],
      base: yellow[500],
      weight: yellow[900],
    },
    gray: {
      gray_1000: "#000000", // 가장 어두운 검정
      gray_800: "#333333", // 80% 흑색
      gray_600: "#666666", // 60% 흑색
      gray_400: "#999999", // 40% 흑색
      gray_200: "#CCCCCC", // 20% 흑색
      gray_0: "#FFFFFF", // 가장 밝은 흰색
    },
    red: {
      main: red[700],
      light: red[200],
      base: red[500],
      weight: red[900],
    },
    orange: {
      main: orange[700],
      light: orange[200],
      base: orange[500],
      weight: orange[900],
    },
    green: {
      main: green[700],
      light: green[200],
      base: green[500],
      weight: green[900],
    },
    purple: {
      main: purple[700],
      light: purple[200],
      base: purple[500],
      weight: purple[900],
    },
  },
});
