"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ThemeToggleButton from "./ThemeToggleButton";
import { useMediaQuery } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [mounted, setMounted] = React.useState(false);
  const { data: session, status } = useSession();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const TableCheck = useMediaQuery("(min-width:690px)");

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      // AppBar didn`t see custom dark.tsx color through the toggling logic.
      // I don`t know why so must force use it color directly here!
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        marginBottom: "30px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DataBase
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DataBase
          </Typography>

          {TableCheck && mounted && session && (
            <Box sx={{ marginLeft: "auto" }}>
              <Typography sx={{ mr: 2 }}>
                {" "}
                Signed in as {session.user?.email}
              </Typography>
            </Box>
          )}
          {mounted && <ThemeToggleButton />}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {!mounted || status === "loading" ? (
                  <Avatar />
                ) : status === "authenticated" ? (
                  <Avatar
                    alt={session?.user?.name || ""}
                    src={session?.user?.image || undefined}
                  />
                ) : (
                  <Avatar>?</Avatar>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={() => {
                  return session ? signOut() : signIn();
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  {session ? "Logout" : "Login"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
