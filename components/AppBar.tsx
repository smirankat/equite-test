import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const pages = [
  { id: 1, title: "Главная", path: "/" },
  { id: 1, title: "Рейтинги", path: "/ratings" },
  { id: 1, title: "Блог", path: "/blog" },
  { id: 1, title: "PRO", path: "/pro" },
  { id: 1, title: "Инвестору", path: "/investor" },
];

const MyAppBar: FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 2 }}>
            <Image
              alt="logo"
              src="/../public/logo.png"
              layout="fixed"
              width={48}
              height={56}
            />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "none" },
              color: "white",
            }}
          >
            EQUITE.IO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map(({ id, title, path }) => (
              <Link key={id} href={path} passHref>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    px: 5,
                    fontSize: 14,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      background: "#101C2B",
                      outline: "white solid 1px",
                    },
                  }}
                >
                  {title}
                </Button>
              </Link>
            ))}
          </Box>

          <IconButton sx={{ p: 0, mr: 2 }}>
            <Typography
              sx={{
                p: 1.3,
                fontSize: 14,
                color: "#AE8DE5",
                background: "#162537",
                // display: "block",
                borderRadius: 1.5,
              }}
            >
              RU
            </Typography>
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 0,
            }}
          >
            <Button sx={{ p: 0, mr: 2 }}>
              <Typography
                sx={{
                  px: 3,
                  py: 1,
                  fontSize: 14,
                  color: "#AE8DE5",
                  border: "1px solid #C49BFF",
                  background: "#101C2B",
                  borderRadius: 1.5,
                  textTransform: "uppercase",
                  "&:hover": {
                    background: "#5040B2",
                    color: "white",
                    border: "none",
                  },
                }}
              >
                Войти
              </Typography>
            </Button>
            <Button sx={{ p: 0 }}>
              <Typography
                sx={{
                  px: 3,
                  py: 1,
                  fontSize: 14,
                  color: "#AE8DE5",
                  border: "1px solid #C49BFF",
                  background: "#101C2B",
                  borderRadius: 1.5,
                  textTransform: "uppercase",
                  "&:hover": {
                    background: "#5040B2",
                    color: "white",
                    border: "none",
                  },
                }}
              >
                Начать
              </Typography>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon
                sx={{
                  width: 40,
                  height: 40,
                  color: "#C49BFF",
                  border: "1px solid #C49BFF",
                  borderRadius: 1,
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              // anchorOrigin={{
              //   vertical: "bottom",
              //   horizontal: "left",
              // }}
              // keepMounted
              // transformOrigin={{
              //   vertical: "top",
              //   horizontal: "left",
              // }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              {pages.map(({ id, title, path }) => (
                <Link key={id} href={path} passHref>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};
export default MyAppBar;
