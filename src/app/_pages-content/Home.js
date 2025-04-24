"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image from "../../../public/assets/carleslavacao.jpg";
import dynamic from "next/dynamic";
import {
  main_content_text,
  main_content_text_p,
  main_content_text_h2,
  main_content_text_p_2,
  imageStyle,
} from "../_style/style";
const ServiceSlider = dynamic(() => import("../_components/Carrossel"), {
  ssr: false,
});

//Conteúdo da página de Home

export default function Home() {
  return (
    <Box>
      <Box sx={imageStyle}>
        <Image
          src={image}
          alt="Logo Charles Lavação"
          fill
          priority
          style={{ objectFit: "contain" }} // ou "cover", se preferir
        />
      </Box>

      <Box sx={main_content_text}>
        <Typography sx={main_content_text_p}>
          No nosso lava rápido, o cuidado com seu carro vem em primeiro lugar.
          Buscamos e entregamos o veículo onde for mais cômodo pra você, com
          atendimento em toda a Grande Florianópolis. Estamos localizados no
          Estreito, com fácil acesso e uma equipe pronta pra oferecer um serviço
          de qualidade, do jeito que seu carro merece. Trabalhamos com atenção
          aos detalhes e compromisso com a satisfação de cada cliente. Se você
          procura praticidade, confiança e um ótimo resultado, pode contar com a
          gente. Deixa seu carro em boas mãos — nós cuidamos de tudo pra você!
        </Typography>

        <Typography variant="h2" sx={main_content_text_h2}>
          Nossos Serviços
        </Typography>
        <Typography sx={main_content_text_p_2}>
          Clique nas fotos para ver os serviços disponíveis! Aperte no botão no
          canto da tela e nos chame no WhatsApp! 👉👉👉
        </Typography>
      </Box>

      <ServiceSlider />

      {/* <InstagramVideo/> */}
    </Box>
  );
}
