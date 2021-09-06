import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Kognitiv psykoterapi</Typography>
          <Grid container justifyContent="center">
            <Button color="inherit">Om mig</Button>
            <Button color="inherit">Tjänster</Button>
            <Button color="inherit">Här träffas vi</Button>
            <Button color="inherit">Kontakt</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
