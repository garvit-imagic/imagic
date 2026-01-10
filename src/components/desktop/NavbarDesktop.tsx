"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { navLinks } from "@/constants/navigation";

export default function NavbarDesktop() {
  return (
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
        display: { xs: "none", md: "block" },
      }}
    >
      <Toolbar
        className="max-w-[1400px] w-full mx-auto"
        sx={{
          minHeight: "80px",
          paddingLeft: { lg: "80px", md: "80px", sm: "24px", xs: "24px" },
          paddingRight: { lg: "70px", md: "70px", sm: "24px", xs: "24px" },
        }}
      >
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center  py-[25px]">
            <Image
              src="/assets/nav-logo.svg"
              alt="IMAGIC CREATIVES"
              width={259}
              height={50}
              className="w-auto"
              priority
            />
          </Link>

          <nav className="flex items-center gap-[35px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-[21px] leading-[100%] text-black hover:text-[#8CC63F] transition-colors"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  letterSpacing: "0%",
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              className="font-normal text-[20px] leading-[100%] text-center whitespace-nowrap ml-[22px] bg-[#BEE56E] transition-colors hover:bg-[#BAED50]"
              style={{
                borderRadius: "8px",
                paddingTop: "16px",
                paddingRight: "40px",
                paddingBottom: "16px",
                paddingLeft: "40px",
                fontFamily: "Open Sans Hebrew, Open Sans, sans-serif",
                fontSize: "18px",
                letterSpacing: "0%",
                color: "#000000",
              }}
            >
              Magic Space
            </button>
          </nav>
        </div>
      </Toolbar>
    </AppBar>
  );
}
