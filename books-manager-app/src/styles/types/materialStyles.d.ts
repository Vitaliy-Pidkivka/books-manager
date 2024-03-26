import "@mui/material/styles"
import "@mui/material/styles/createTheme"

import { Typography } from "types/theme"

declare module "@mui/material/styles" {
  interface Theme {
    shape: {
      borderRadius: (factor: number) => string
    }
    typography: Typography
  }
  interface Palette {
    mode: strin
    warning: {
      main: string
    }
    white: {
      main: string
      secondary: string
      light: string
    }
    black: {
      main: string
      300: string
      301: string
      302: string
      400: string
      401: string
    }
    purple: {
      main: string
      200: string
      400: string
      800: string
    }
    lightblue: {
      main: string
    }
  }
}
