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
import Button from "../ui/Button";
import { navLinks } from "@/constants/navigation";

export default function NavbarMobile() {
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
          <button
            className="font-normal text-center"
            style={{
              borderRadius: "8px",
              paddingTop: "16px",
              paddingRight: "40px",
              paddingBottom: "16px",
              paddingLeft: "40px",
              background: "#BEE56E",
              boxShadow: "5px 5px 0px 0px #81A733",
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Magic Space
          </button>
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
          borderBottom: "1px solid #DEDEDE",
          boxShadow: "none",
        }}
      >
        <Toolbar
          className="w-full py-[16px]"
          sx={{
            paddingLeft: "24px",
            paddingRight: "30px",
          }}
        >
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/nav-logo-mobile.jpg"
                alt="IMAGIC CREATIVES"
                width={145}
                height={28}
                className="h-[28px] w-[145px]"
                priority
              />
            </Link>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
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
