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
    <div className="h-full bg-white flex flex-col overflow-hidden">
      {/* Header with logo and close button */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-[#DEDEDE] flex-shrink-0">
        <Image
          src="/assets/nav-logo-mobile.jpg"
          alt="IMAGIC CREATIVES"
          width={145}
          height={28}
          className="h-[28px] w-[145px]"
        />
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: "#000",
            padding: "8px",
          }}
        >
          <CloseIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto">
        <List sx={{ paddingTop: "32px", paddingBottom: "24px" }}>
          {navLinks.map((link, index) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                href={link.href}
                onClick={handleDrawerToggle}
                sx={{
                  paddingY: "16px",
                  paddingX: "32px",
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                  },
                  "&:hover .MuiListItemText-primary": {
                    color: "#8CC63F",
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "19px",
                      fontWeight: 500,
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>

      {/* Bottom Section with Button */}
      <div className="px-6 pb-8 border-t border-[#DEDEDE] pt-6 flex-shrink-0">
        <button
          onClick={handleDrawerToggle}
          className="font-normal text-center w-full bg-[#BEE56E] transition-colors hover:bg-[#BAED50]"
          style={{
            height: "56px",
            borderRadius: "8px",
            fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#000000",
          }}
        >
          Magic Space
        </button>

        {/* Optional: Add contact info or social links */}
        <div className="mt-6 text-center">
          <p
            style={{
              fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
              fontSize: "12px",
              color: "#666666",
              lineHeight: "150%",
            }}
          >
            © 2026 Imagic Creatives
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid #DEDEDE",
          boxShadow: "none",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          display: { xs: "block", md: "none" },
        }}
      >
        <Toolbar
          className="w-full py-[16px]"
          sx={{
            paddingLeft: "24px",
            paddingRight: "60px",
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
          disableScrollLock: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 320,
            boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
