"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import whatsappIcon from "../../../public/assets/wpp.png";
import { Box } from "@mui/material";
import { whatsapp_button, pulseBounceKeyframes } from "../_style/style";

export default function WhatsAppButton() {
  const phoneNumber = "5548999193788";
  const message = "Olá! Gostaria de mais informações.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = pulseBounceKeyframes;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <Box sx={whatsapp_button} onClick={handleClick}>
      <Image src={whatsappIcon} alt="WhatsApp" width={60} height={60} />
    </Box>
  );
}
