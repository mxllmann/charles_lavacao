import { Stack, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { footer, footer_link, footer_p } from "../_style/style.js";

//Componente do footer com os créditos do desenvolvedor

export default function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={footer}
      spacing={3}
    >
      <Typography sx={footer_p}>Desenvolvido por Arthur Mallmann.</Typography>
      <Link 
        color="#000000" 
        href="https://github.com/mxllmann" 
        sx={footer_link}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <GitHubIcon sx={{ mr: 0.5 }} fontSize="small" />
        {"Github"}
      </Link>
      <Link
        color="#000000"
        href="https://www.linkedin.com/in/arthurmallmann/"
        sx={footer_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon sx={{ mr: 0.5 }} fontSize="small"/>
        {"LinkedIn"}
      </Link>
    </Stack>
  );
}
