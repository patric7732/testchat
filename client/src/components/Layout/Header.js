import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import UserAuth from "./UserAuth";
import MobileNavMenu from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";
import Logo from "./Logo";

import classes from "../../styles/Header.module.css";
import { AppBar, Container, Toolbar } from "@mui/material";

const Header = (props) => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);

  // 현재 경로가 로그인 페이지인 경우 Header를 렌더링하지 않음
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Fragment>
      <AppBar position="sticky" sx={{ bgcolor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MobileNavMenu
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              anchorElNav={anchorElNav}
              classes={classes}
            />

            <Logo display="xs" />

            <DesktopNavMenu classes={classes} />

            <UserAuth
              setIsLoggedIn={props.setIsLoggedIn}
              isLoggedIn={props.isLoggedIn}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};

export default Header;
