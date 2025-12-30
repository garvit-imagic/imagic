"use client";

import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import Button from "./ui/Button";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Culture", href: "#culture" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="w-64 h-full bg-white">
      <div className="flex justify-end p-4">
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton href={link.href} onClick={handleDrawerToggle}>
              <ListItemText
                primary={link.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "16px",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ padding: "16px" }}>
          <Button variant="primary" size="md" className="w-full">
            Magic Space
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "white",
          borderBottom: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar
          className="max-w-[1400px] w-full mx-auto px-6 lg:px-12"
          sx={{
            minHeight: { xs: "70px", md: "80px" },
            paddingLeft: { xs: "24px", md: "48px" },
            paddingRight: { xs: "24px", md: "48px" },
          }}
        >
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/nav-logo-mobile.jpg"
                alt="IMAGIC CREATIVES"
                width={145}
                height={28}
                className="h-[28px] w-[145px] md:hidden"
                priority
              />
              <Image
                src="/assets/nav-logo.svg"
                alt="IMAGIC CREATIVES"
                width={200}
                height={50}
                className="hidden md:block h-12 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-black text-base font-normal hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" size="md" className="px-8 py-3">
                Magic Space
              </Button>
            </nav>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className="md:hidden"
              sx={{
                color: "#666",
                padding: "8px",
              }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
