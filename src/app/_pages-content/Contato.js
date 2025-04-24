"use client";

import { main_content_text_p } from "../_style/style";
import dynamic from "next/dynamic";
import { Typography, Box } from "@mui/material";
import { main_content_text_h2, main_content_text_p_2 } from "../_style/style";
const ServiceSlider = dynamic(() => import("../_components/Carrossel"), {
  ssr: false,
});

//Conteúdo da página de contato

export default function Contact() {
  return (
    <Box>
      <Typography variant="h2" sx={main_content_text_h2}>
        Contato
      </Typography>
      <Typography sx={main_content_text_p}>
        O nosso contato e marcação de servicos é inteira e exclusivamente pelo
        WhatsApp 48 99919-3788 (Charles, como não seria? hahaha). É só apertar
        no botão do WhatsApp no canto inferior direito da tela!
      </Typography>
      <Typography variant="h2" sx={main_content_text_h2}>
        Nosso Serviços
      </Typography>
      <Typography sx={main_content_text_p_2}>
        Clique nas fotos para ver os serviços disponíveis!
      </Typography>
      <ServiceSlider />
    </Box>
  );
}
