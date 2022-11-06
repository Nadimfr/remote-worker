import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import { Container } from "@mui/system";
import "./style.css";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          { name: "Onboard", icon: <GroupAddOutlinedIcon />, to: "/onboard" },
          {
            name: "Offboard",
            icon: <GroupRemoveOutlinedIcon />,
            to: "/offboard",
          },
          {
            name: "Employee List",
            icon: <PeopleAltOutlinedIcon />,
            to: "/employee-list",
          },
          {
            name: "Order equipment",
            icon: <ShoppingCartOutlinedIcon />,
            to: "/order-equipment",
          },
          {
            name: "Order Tracking",
            icon: <LocalShippingOutlinedIcon />,
            to: "/order-tracking",
          },
          {
            name: "Current Inventory",
            icon: <InventoryOutlinedIcon />,
            to: "/current-inventory",
          },
          { name: "Report", icon: <SummarizeOutlinedIcon />, to: "" },
          { name: "Contact us", icon: <ContactPageOutlinedIcon />, to: "" },
        ].map((text, index) => (
          <a style={{ textDecoration: "none" }} href={text.to}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText
                  style={{ color: "#00000087" }}
                  primary={text.name}
                />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
      <List>
        {["Workset Creation"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: { xs: "space-between", sm: "space-between" },
            padding: "0px 5%",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "#00000087" }} />
          </IconButton>
          <Container class="css-1kjkg0s-MuiContainer-root">
            <AccountCircleOutlinedIcon
              style={{ color: "#00000087", marginRight: "5px" }}
            />
            <Typography
              color={"#00000087"}
              variant="body1"
              noWrap
              component="div"
            >
              David Rabin
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
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
            display: { xs: "none", sm: "block" },
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
