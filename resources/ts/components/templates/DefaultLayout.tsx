import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isVisibleDrawerState } from "../../store/isVisibleDrawerState";

import { ResponsiveDrawer } from "../../components/organisms/ResponsiveDrawer";
import { Footer } from "../molecules/layout/Footer";

import { Box, CssBaseline } from "@mui/material";

const drawerWidth = 220;

type Props = {
  window?: () => typeof window;
};

export const DefaultLayout: FC<Props> = (props) => {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [isVisibleDrawer, setIsVisibleDrawer] =
    useRecoilState(isVisibleDrawerState);

  const handleDrawerToggle = () => {
    setIsVisibleDrawer(!isVisibleDrawer);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <ResponsiveDrawer
          drawerWidth={drawerWidth}
          container={container}
          isVisibleDrawer={isVisibleDrawer}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};
