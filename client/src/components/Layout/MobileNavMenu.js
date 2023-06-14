import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "../../styles/Header.module.css";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const MobileNavMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="black"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: {
              xs: "block",
              md: "none",
              fontFamily: "GongGothicMedium",
            },
          }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Link to="/products/all" className={classes.purchaseLink}>
              구매하기
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Link to="/products/add" className={classes.purchaseLink}>
              판매하기
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </Fragment>
  );
};

export default MobileNavMenu;
