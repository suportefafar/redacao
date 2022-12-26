import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  MdOutlineHome,
  MdMenu,
  MdSearch,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { BsJournalText, BsFileRichtext } from "react-icons/bs";
import Image from "next/image";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar({ window }) {
  const navItems = [
    { text: "Início", icon: <MdOutlineHome />, href: "/" },
    { text: "Dicas", icon: <MdOutlineTipsAndUpdates />, href: "/" },
    { text: "Redações 1000", icon: <BsJournalText />, href: "/" },
    { text: "Manual Oficial", icon: <BsFileRichtext />, href: "/" },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box className="flex gap-4 items-center m-4">
        <Image src="/images/icon.svg" width={32} height={32} />
        <Typography variant="body1" component="div" className="font-bold">
          Redação ENEM
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton className="flex gap-4">
              <Box className="text-2xl">{item.icon}</Box>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawerWidth = 240;

  return (
    <Box className="flex">
      <AppBar component="nav" className="shadow-md bg-white text-black">
        <Toolbar className="flex gap-4 justify-between">
          <Box className="flex items-center gap-4">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              className="block md:hidden text-2xl"
            >
              <MdMenu />
            </IconButton>
            <Box className="flex items-center gap-2">
              <Image src="/images/icon.svg" width={32} height={32} />
              <Typography variant="body1" component="div" className="font-bold">
                Redação ENEM
              </Typography>
            </Box>
          </Box>

          <Box className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Button key={item.text}>{item.text}</Button>
            ))}
          </Box>

          <Search className="hidden sm:block">
            <SearchIconWrapper>
              <MdSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Procurar…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
