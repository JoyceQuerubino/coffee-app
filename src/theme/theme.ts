import { extendTheme } from "native-base";

const customTheme = extendTheme({
  colors: {
    primary: {
      500: "#c67c4e",
    },
    secondary: {
      50: "#e2e2e2",
      100: "#b6b6b6",
      200: "#898989",
      300: "#5d5d5d",
      400: "#272221",
      500: "#272221",
      600: "#1f1c1c",
      700: "#171616",
      800: "#0f0f0f",
      900: "#080808",
    },
  },
});

export default customTheme;