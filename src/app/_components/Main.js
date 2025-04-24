"use client";

import { Container, Box } from "@mui/material";
import { container_main, main_content } from "../_style/style";

export default function Main({ children }) {
  return (
    <Container maxWidth="md" sx={container_main}>
      <Box sx={main_content}>{children}</Box>
    </Container>
  );
}
