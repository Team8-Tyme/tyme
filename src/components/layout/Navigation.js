import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelector } from "react-redux";
import { SignedInLinks } from "./SignedInLinks";
import { NavigationStyle } from "../../styles/components/layout/navigationStyle"
import { Switch, Route, Redirect } from "react-router-dom";
import mainRoutes from "../../config/routes";
import { Link, withRouter } from "react-router-dom";

const switchRoutes = (
  <Switch>
    {mainRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    {/* <Route path="/newProject" name= "New Project" component={CreateProject}/>
    <Route path="/project/:id" name= "Project Details" component={ProjectDetails}/> */}
  </Switch>
);

const Navigation = ({ location }) => {
  const classes = NavigationStyle();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const auth = useSelector(state => state.firebase.auth);

  //const profile = useSelector(state => state.firebase.profile);

  function getRoute() {
    return location.pathname;
  }
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  if (!auth.uid) return <Redirect to='/about' />;
  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            tyme
          </Typography>
          <SignedInLinks />
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton style={{ color: "#fff" }} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.menuItems}>
          {mainRoutes.map((prop, index) => (
            <Link
              to={prop.path}
              className={classes.menuItems}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <ListItem button key={prop.name}>
                <ListItemIcon className={classes.menuItems}>
                  <prop.icon />
                </ListItemIcon>
                <ListItemText primary={prop.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
      </main>
    </div>
  );
};

export default withRouter(Navigation);
