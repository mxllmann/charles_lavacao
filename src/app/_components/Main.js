"use client";

import { Container, Box } from "@mui/material";
import { container_main, main_content } from "../_style/style";

//Container padrão das páginas, no geral, toda page.js vai ter a seguinte estrutura:
//<Main>
//  <ConteudoDaPagina/>
//</Main>
//Isso mantém o código mais limpo de forma geral.

export default function Main({ children }) {
  return (
    <Container maxWidth="md" sx={container_main}>
      <Box sx={main_content}>{children}</Box>
    </Container>
  );
}
