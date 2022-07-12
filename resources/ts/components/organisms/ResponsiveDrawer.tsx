import { memo, FC } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  Divider,
  Toolbar,
  AppBar,
  IconButton,
  List,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { mainListItems, secondaryListItems } from "../molecules/ListItems";
import { ScrollToTopOnMount } from "../../libs/ScrollToTopOnMount";
import LogoImg from "@img/loadmappers_logo.svg";

type DrawerProps = {
  drawerWidth: number;
  container: any;
  isVisibleDrawer: boolean;
  handleDrawerToggle: () => void;
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

export const ResponsiveDrawer: FC<DrawerProps> = memo((props) => {
  const { drawerWidth, container, isVisibleDrawer, handleDrawerToggle } = props;

  const drawer = (
    <div>
      <StyledToolbar />
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </div>
  );

  return (
    <>
      <ScrollToTopOnMount />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <img height="26px" src={LogoImg} alt="loadmappers" />
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="drawer navigation"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={isVisibleDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
});
