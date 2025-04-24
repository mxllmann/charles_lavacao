"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  main_content_text_h2,
  main_content_text_p,
  main_content_text_p_2,
} from "../_style/style";
import dynamic from "next/dynamic";
const ServiceSlider = dynamic(() => import("../_components/Carrossel"), {
  ssr: false,
});

//Conteúdo da página de sobre

export default function Sobre() {
  return (
    <Box>
      <Typography variant="h2" sx={main_content_text_h2}>
        Sobre Nós
      </Typography>
      <Typography sx={main_content_text_p}>
        Olá! Meu nome é Charles e sou o fundador da Charles Lavação Automotiva,
        criada com o propósito de oferecer cuidado profissional e personalizado
        para o seu veículo. Apaixonado por carros e sempre atento aos detalhes,
        decidi abrir meu próprio negócio para entregar mais do que uma simples
        lavagem: aqui, cada veículo é tratado com atenção, respeito e os
        melhores produtos do mercado. Trabalhamos com lavagem técnica,
        enceramento, higienização de interiores, remoção de manchas, limpeza de
        motor, entre outros serviços especializados, sempre buscando a
        excelência no acabamento e a satisfação do cliente. Nosso compromisso é
        com a qualidade, confiança e transparência. Cada carro que passa por
        aqui recebe o mesmo cuidado que eu teria com o meu próprio. Seja
        bem-vindo(a)! Conte com a gente para manter seu carro limpo, protegido e
        valorizado.
      </Typography>
      <Typography variant="h2" sx={main_content_text_h2}>
        Nossos Serviços
      </Typography>
      <Typography sx={main_content_text_p_2}>
        Clique nas fotos para ver os serviços disponíveis!
      </Typography>
      <ServiceSlider />
    </Box>
  );
}
