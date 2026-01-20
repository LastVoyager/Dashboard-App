import * as React from "react";
import NextLink from "next/link";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { signOut } from "next-auth/react";
import scss from "./SideMenu.module.scss";

import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const StyledDrawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
});

const menuRouteList = ["analytics", "profile", "settings", ""];
const menuListTranslations = ["Data", "Profile", "Settings", "Logout"];
const menuListIcons = [HomeIcon, Person2Icon, SettingsIcon, ExitToAppIcon];

function SideMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const mobileCheck = useMediaQuery("(min-width:600px)");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = (text: string, event: React.MouseEvent) => {
    if (text === "Logout") {
      event.preventDefault();
      signOut({ callbackUrl: "/" });
      return;
    }
    setOpen(false);
  };

  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        ...(open ? openedMixin(theme) : closedMixin(theme)),
        "& .MuiDrawer-paper": {
          left: 0,
          top: mobileCheck ? 64 : 57,
          bottom: 60,
          height: `calc(100vh - ${mobileCheck ? 64 : 57}px - 60px)`,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open ? openedMixin(theme) : closedMixin(theme)),
        },
      }}
    >
      <div
        className={scss.drawerHeader}
        style={{ justifyContent: open ? "flex-end" : "center" }}
      >
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <NextLink href={`/dashboard/${menuRouteList[index]}`}>
              <ListItemButton
                onClick={(event) => handleListItemButtonClick(text, event)}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {React.createElement(menuListIcons[index])}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
}

export default SideMenu;
