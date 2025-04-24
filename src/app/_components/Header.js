"use client";

import React from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/assets/image.png";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { header } from "../_style/style.js";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  //Verifica se o dispositivo é mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      id="main-header"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={header}
    >
      <Image
        height={98}
        width={212.6}
        style={{ marginLeft: "1rem" }}
        src={logo}
        className="header-image"
        alt="Logo"
        onClick={() => router.push("/")}
      />
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
      {/* Se for mobile, ele carrega o menu para dispositivos mobile, se não, é renderizado
      o menu para dispositivos maiores */}
    </Stack>
  );
}
