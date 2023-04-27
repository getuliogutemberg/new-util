import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useLocation, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FactoryIcon from "@mui/icons-material/Factory";
import MonitorIcon from "@mui/icons-material/Monitor";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import MemoryIcon from "@mui/icons-material/Memory";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import SettingsIcon from "@mui/icons-material/Settings";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import VpnKeyIcon from "@mui/icons-material/VpnKey";

import Collapse from "@mui/material/Collapse";
import Tooltip from "@mui/material/Tooltip";
import avatar from "../Assets/Images/avatar.png";

const drawerWidth = 300;

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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function TemplateView({ children, isLogged, setIsLogged }) {
  const [openInForma, setOpenInForma] = React.useState(false);

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const links = pathnames.map((pathname, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

    return {
      id: index,
      label:
        routeTo.replace("-", " ").replace("/", "")[0].toUpperCase() +
        routeTo.replace("-", " ").replace("/", "").substring(1),
      link: routeTo,
    };
  });

  const handleClick = () => {
    if (open) {
      setOpenInForma(!openInForma);
    } else {
      setOpenInForma(true);
      setOpen(true);
    }
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const linksTopBar = isLogged
    ? [
        {
          icon: <ChatBubbleOutlineIcon />,
          text: "Feedback",
          link: `/feedback`,
        },
        { icon: <HelpOutlineIcon />, text: "Faq", link: "/faq" },
        {
          icon: <ExitToAppIcon />,
          text: "Sair",
          link: "/",
        },
      ]
    : [
        {
          icon: <ChatBubbleOutlineIcon />,
          text: "Feedback",
          link: `/feedback`,
        },
        { icon: <HelpOutlineIcon />, text: "Faq", link: "/faq" },
      ];

  const linksDrawer = isLogged
    ? [
        { icon: <MonitorIcon />, text: "Monitoramento", link: "/client" },
        {
          icon: <WarningAmberIcon />,
          text: "Histórico de Recomendações",
          link: "/alerts",
        },
        {
          icon: <ContentPasteSearchIcon />,
          text: "Histoticos de Sensores",
          link: "/sensor-data",
        },
      ]
    : [{ icon: <VpnKeyIcon />, text: "Login", link: "/login" }];

  const linksInForma = isLogged
    ? [{ icon: <FactoryIcon />, text: "Painel inForma", link: "/master" }]
    : [];

  const subLinksInforma = isLogged
    ? [
        {
          icon: <MemoryIcon />,
          text: "Análises",
          link: "/analitics",
        },
        {
          icon: <LineAxisIcon />,
          text: "Homologação",
          link: "/homologation",
        },
        {
          icon: <SettingsIcon />,
          text: "Configuracões",
          link: "/setup",
        },
        { icon: <EmojiObjectsIcon />, text: "Tela de testes", link: "/tests" },
      ]
    : [];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenInForma(false);
  };

  const Logout = () => {
    setIsLogged(false);
    setOpen(false);
    setOpenInForma(false);
  };

  return (
    <Box
      sx={{
        display: "flex",

        background: "white",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <CssBaseline />

      <AppBar position="fixed" open={open} style={{ background: "#0c5e5a" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {isLogged ? (
              <Tooltip title={"Menu"} placement="right">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Link
                key={"Login"}
                color="inherit"
                to={"/login"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Tooltip title={"Login"} placement="right">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{
                      marginRight: 5,
                      ...(open && { display: "none" }),
                    }}
                  >
                    <LockOpenIcon />
                  </IconButton>
                </Tooltip>
              </Link>
            )}

            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {links.map(({ link, label, id }) => (
                <Link
                  key={id}
                  color="inherit"
                  to={link}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      marginRight: 5,
                      ...(!open && { paddingTop: 0.5, color: "white" }),
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </Breadcrumbs>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <List>
              {linksTopBar.map(({ text, icon, link }) =>
                isLogged && text === "Sair" ? null : (
                  <Tooltip title={text} placement="top-end">
                    <Link
                      to={`${link}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        padding: "6px",
                      }}
                    >
                      {icon}
                      {/* {icon} */}
                      {/* <ListItemIcon
              sx={{
                
              }}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
              </ListItemIcon> */}
                    </Link>
                  </Tooltip>
                )
              )}
            </List>
            {isLogged && (
              <Tooltip title={"Npme do Usuário"} placement="top-end">
                <Avatar alt="Npme do Usuário" src={avatar} />
              </Tooltip>
            )}
            <List>
              {linksTopBar.map(({ text, icon, link }) =>
                isLogged && text === "Sair" ? (
                  <Tooltip title={text} placement="top-end">
                    <Link
                      key={text}
                      to={`${link}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        padding: "6px",
                      }}
                      onClick={() => {
                        Logout();
                      }}
                    >
                      {icon}
                      {/* {icon} */}
                      {/* <ListItemIcon
                sx={{
                  
                }}
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                </ListItemIcon> */}
                    </Link>
                  </Tooltip>
                ) : null
              )}
            </List>
          </div>
        </Toolbar>
      </AppBar>

      {isLogged && (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Tooltip title={"Fechar"}>
              <IconButton
                onClick={() => {
                  setOpen(false);
                  setOpenInForma(false);
                }}
              >
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </Tooltip>
          </DrawerHeader>

          <Divider />
          <List>
            {linksDrawer.map(({ text, icon, link }) => (
              <Tooltip title={!open && text} placement="right">
                <Link
                  key={text}
                  to={`${link}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      onClick={handleDrawerClose}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </Link>
              </Tooltip>
            ))}

            {linksInForma.map(({ text, icon, link }) => (
              <Tooltip title={!open && text} placement="right">
                <Link
                  key={text}
                  to={`${link}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      onClick={handleClick}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                      {open ? (
                        openInForma ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : null}
                    </ListItemButton>
                    <Collapse in={openInForma} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {subLinksInforma.map(({ text, icon, link }) => (
                          <Tooltip title={!open && text}>
                            <Link
                              key={text}
                              to={`${link}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <ListItemButton
                                sx={{ pl: 4 }}
                                onClick={handleDrawerClose}
                              >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItemButton>
                            </Link>
                          </Tooltip>
                        ))}
                      </List>
                    </Collapse>
                  </ListItem>
                  <Divider />
                </Link>
              </Tooltip>
            ))}
          </List>

          {/* <Divider /> */}
          <List>
            {subLinksInforma.map(({ text, icon, link }) => (
              <Tooltip title={!open && text} placement="right">
                <Link
                  key={text}
                  to={`${link}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      onClick={handleDrawerClose}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </Tooltip>
            ))}
          </List>
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          p: 0,
        }}
        onClick={handleDrawerClose}
      >
        <DrawerHeader />

        {children}
      </Box>
    </Box>
  );
}
