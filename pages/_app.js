import "@/styles/globals.css";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {" "}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
