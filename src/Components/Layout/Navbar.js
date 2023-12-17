import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          USERS
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <NavLink className="nav-link" to={"/"} style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }}>
            
          </NavLink>
          <NavLink className="nav-link" to={"/about"} style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }}>
            
          </NavLink>
          <NavLink className="nav-link" to={"/contact"} style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }}>
            
          </NavLink>
          <Button component={Link} to={"/users/add"} variant="outlined" color="inherit">
            Add User
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
