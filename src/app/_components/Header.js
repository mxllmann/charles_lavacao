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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      id="main-header"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        ...header,
        gap: "6.5rem", // valor padrão para telas grandes
        "@media (max-width: 350px)": {
          gap: "2rem", // telas com até 600px
        },
        "@media (min-width: 351px) and (max-width: 400px)": {
          gap: "4rem", // telas com até 600px
        },
        "@media (min-width: 401px) and (max-width: 500px)": {
          gap: "6rem", // entre 601px e 960px
        },
        "@media (min-width: 501px) and (max-width: 1000px)": {
          gap: "27rem",
        },
      }}
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
    </Stack>
  );
}
