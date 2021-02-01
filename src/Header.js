import * as React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./img/logo-two.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
  Hidden,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import SideDrawer from "./components/SideDrawer";


const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `#444`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    color: `#444`,
  },
  customizeToolbar: {
    minHeight: 26,
    backgroundColor: "#c4c3ba",
    color: `#444`,
  },
});

const navLinks = [
  { title: `about us`, path: `/about-us` },
  { title: `product`, path: `/product` },
  { title: `blog`, path: `/blog` },
  { title: `contact`, path: `/contact` },
  { title: `faq`, path: `/admin` },
];

function Header() {
  const classes = useStyles();
  /*  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };*/
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>

        <div className="header__title">JACK BYGRAVES CARS</div>
        <Link to="/admin" className="header__login">
          {/*        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="nav-sprite-v1">
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </span>
          </div>
        </Link>*/}
        </Link>
      </div>
      <div className="header__nav">
        <div className="header__navContain">
          <AppBar position="relative">
            <Toolbar
              className={classes.customizeToolbar}
              disableGutters
              fontWeight={400}
            >
              <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                <IconButton edge="start" color="inherit" aria-label="home">
                  <Home fontSize="small" />
                </IconButton>
                <Hidden smDown>
                  <List
                    component="nav"
                    aria-labelledby="main navigation"
                    className={classes.navDisplayFlex} // this
                  >
                    {navLinks.map(({ title, path }) => (
                      <a href={path} key={title} className={classes.linkText}>
                        <ListItem button>
                          <ListItemText primary={title} />
                        </ListItem>
                      </a>
                    ))}
                  </List>
                </Hidden>
                <Hidden mdUp>
                  <SideDrawer navLinks={navLinks} />
                </Hidden>
              </Container>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
}

export default Header;
