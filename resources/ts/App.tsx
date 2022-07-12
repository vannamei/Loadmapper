import { StrictMode, FC } from "react";
import { RecoilRoot } from "recoil";
import { Router } from "./router/Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

export const App: FC = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </ThemeProvider>
    </StrictMode>
  );
};
