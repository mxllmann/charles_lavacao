import React from "react";
import {
  Stack,
  Link,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import MessageIcon from "@mui/icons-material/Message";
import InfoIcon from "@mui/icons-material/Info";

export default function DesktopMenu() { 

    const linkStyle = {
        display: "flex", 
        alignItems: "center", 
        textDecoration: "none", 
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        color: "#000000",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          transform: "scale(1.05)"
        }
      };

    return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Link
        href="/"
        color="#000000"
        sx={linkStyle}
      >
        <DirectionsCarIcon sx={{ mr: 0.5 }} fontSize="small" />
        Home
      </Link>
      <Link
        href="/servicos"
        color="#000000"
        sx={linkStyle}
      >
        <WaterDropIcon sx={{ mr: 0.5 }} fontSize="small" />
        Serviços
      </Link>
      <Link
        href="/contato"
        color="#000000"
        sx={linkStyle}
      >
        <MessageIcon sx={{ mr: 0.5 }} fontSize="small" />
        Contato
      </Link>
      <Link
        href="/sobre"
        color="#000000"
        sx={linkStyle}
      >
        <InfoIcon sx={{ mr: 0.5 }} fontSize="small" />
        Sobre
      </Link>
    </Stack>
    );
}