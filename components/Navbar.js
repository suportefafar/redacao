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
  MdOutlineInfo,
} from "react-icons/md";
import { BsJournalText, BsFileRichtext } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

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

const navItems_ideal = [
  { text: "Início", icon: <MdOutlineHome />, href: "/" },
  { text: "Dicas", icon: <MdOutlineTipsAndUpdates />, href: "/tips" },
  { text: "Redações 1000", icon: <BsJournalText />, href: "/tops-essays" },
  {
    text: "Manual Oficial",
    icon: <BsFileRichtext />,
    href: "/official-manual",
  },
];

const navItems = [
  { text: "Início", icon: <MdOutlineHome />, href: "/" },
  {
    text: "Manual Oficial",
    icon: <BsFileRichtext />,
    href: "/official-manual",
  },
];

export default function Navbar({ window }) {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box className="flex gap-4 items-center m-4">
        <Image
          src="/images/icon.svg"
          width={32}
          height={32}
          alt="Logo Redação ENEM"
        />
        <Typography variant="body1" component="div" className="font-bold">
          Redação ENEM
        </Typography>
      </Box>
      <Divider />

      <Box>
        {navItems.map((item, index) => (
          <Box key={index}>
            {router.asPath === item.href ? (
              <Button
                startIcon={item.icon}
                className="flex justify-start px-6 py-4 bg-blue-50 hover:bg-blue-50"
                fullWidth
              >
                {item.text}
              </Button>
            ) : (
              <Link href={item.href}>
                <Button
                  startIcon={item.icon}
                  color="inherit"
                  className="flex justify-start px-6 py-4"
                  fullWidth
                >
                  {item.text}
                </Button>
              </Link>
            )}
          </Box>
        ))}
      </Box>
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
              <Image
                src="/images/icon.svg"
                width={32}
                height={32}
                alt="Logo Redação ENEM"
              />
              <Typography variant="body1" component="div" className="font-bold">
                Redação ENEM
              </Typography>
            </Box>
          </Box>

          <Box className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Box key={index}>
                {router.asPath === item.href ? (
                  <Button className="hover:bg-transparent">{item.text}</Button>
                ) : (
                  <Link href={item.href}>
                    <Button color="inherit">{item.text}</Button>
                  </Link>
                )}
              </Box>
            ))}
          </Box>

          <Button
            color="inherit"
            startIcon={<MdSearch />}
            className="px-4 py-2 normal-case bg-gray-50 text-gray-400 "
          >
            Pesquisar...
          </Button>
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
