// Servicos.js
"use client";

import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import {
  main_content_text_h2,
  main_content_text_p,
  main_content_text_p_2,
  main_content_benefits_list,
} from "../_style/style";
import smoothScrollTo from "../_utils/smoothScrollTo";

export default function Servicos() {
  useEffect(() => {
    const scrollTarget = localStorage.getItem("scrollTarget");

    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);

      if (element) {
        const headerOffset = 150;
        const elementY =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;

        // Faz o scroll depois de um leve delay (para garantir que tudo carregou)
        setTimeout(() => {
          smoothScrollTo(elementY, 500);
        }, 1); // 100ms de atraso ajuda a suavizar

        localStorage.removeItem("scrollTarget");
      }
    }
  }, []);

  return (
    <Box>
      <Box id="lavacao">
        <Typography variant="h2" sx={main_content_text_h2}>
          Lavação Técnica com Cera
        </Typography>
        <Typography sx={main_content_text_p}>
          A lavagem técnica com cera é um serviço automotivo que une limpeza
          detalhada e proteção da pintura. Utiliza produtos específicos para
          cada parte do carro, como pintura, vidros, plásticos e rodas, além de
          panos de microfibra que evitam riscos. Após a lavagem minuciosa,
          aplica-se cera automotiva de qualidade, formando uma camada protetora
          contra sol, chuva, poeira e poluição. O resultado é um brilho intenso
          e duradouro, com aparência de carro novo. Esse tipo de lavagem
          valoriza o veículo, preserva sua pintura e facilita futuras limpezas.
          Recomenda-se realizar a lavagem técnica com cera mensalmente ou a cada
          dois meses, conforme o uso do carro.
        </Typography>

        <Box sx={main_content_benefits_list}>
          <Typography sx={main_content_text_p_2}>
            Benefícios da lavagem técnica com cera:
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Proteção contra raios UV e sujeiras
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Prevenção de micro riscos
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Brilho intenso e duradouro
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Conservação da pintura
          </Typography>
        </Box>
      </Box>

      <Box id="interior">
        <Typography variant="h2" sx={main_content_text_h2}>
          Higienização de Interiores
        </Typography>
        <Typography sx={main_content_text_p}>
          A higienização de interiores é essencial para manter o carro limpo,
          cheiroso e livre de impurezas que afetam a saúde e o bem-estar. O
          processo vai muito além de uma limpeza superficial: remove sujeiras
          profundas, ácaros, fungos, bactérias e odores indesejados. Utiliza-se
          produtos específicos e equipamentos como aspiradores potentes,
          extratoras e vapor para limpar bancos, carpetes, teto, painéis e
          saídas de ar. Em veículos com bancos de couro, aplica-se também
          hidratante especial para conservar o material. Esse serviço é indicado
          especialmente para quem transporta crianças, animais, ou passa muito
          tempo no trânsito.
        </Typography>

        <Box sx={main_content_benefits_list}>
          <Typography sx={main_content_text_p_2}>
            Benefícios da higienização:
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Eliminação de odores e microrganismos
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Maior conforto e bem-estar
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Preservação dos materiais internos
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Valorização do veículo
          </Typography>
        </Box>
      </Box>

      <Box id="motor">
        <Typography variant="h2" sx={main_content_text_h2}>
          Limpeza do Cofre do Motor
        </Typography>
        <Typography sx={main_content_text_p}>
          A limpeza do cofre do motor é um serviço que remove sujeira, poeira,
          óleo e resíduos acumulados na parte interna do capô, contribuindo para
          a conservação do motor e componentes eletrônicos. Realizada com
          produtos adequados e técnicas seguras, essa limpeza evita danos e
          melhora o visual do compartimento. O processo é feito com o motor
          frio, protegendo partes sensíveis como sensores, chicotes e módulos
          eletrônicos. Utiliza-se desengraxantes, pincéis e jatos controlados de
          água ou vapor, garantindo um resultado eficaz sem riscos. Além da
          estética, a limpeza facilita inspeções, manutenções e pode prevenir
          mau funcionamento causado por acúmulo de sujeira.
        </Typography>

        <Box sx={main_content_benefits_list}>
          <Typography sx={main_content_text_p_2}>
            Benefícios da limpeza do cofre do motor:
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Conservação dos componentes do motor
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Prevenção de mau contato elétrico
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Visual limpo e profissional
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Valorização do veículo
          </Typography>
        </Box>
      </Box>

      <Box id="vidro">
        <Typography variant="h2" sx={main_content_text_h2}>
          Remoção de Manchas de Chuva Ácida dos Vidros
        </Typography>
        <Typography sx={main_content_text_p}>
          As manchas de chuva ácida nos vidros do carro são causadas por
          resíduos químicos presentes na água da chuva que, ao secarem, deixam
          marcas difíceis de remover com limpeza comum. Essas manchas
          comprometem a visibilidade e a estética do veículo. A remoção
          profissional é feita com produtos específicos e técnicas que restauram
          a transparência dos vidros sem danificá-los. São utilizados limpadores
          ácidos controlados, polidores e ferramentas adequadas para eliminar as
          marcas de forma segura e eficaz. Esse serviço é ideal para quem deseja
          melhor visibilidade, segurança ao dirigir e aparência impecável do
          carro.
        </Typography>

        <Box sx={main_content_benefits_list}>
          <Typography sx={main_content_text_p_2}>
            Benefícios da limpeza dos vidros:
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Restauração da clareza dos vidros
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Melhora na visibilidade em dias de chuva
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Proteção contra corrosão futura
          </Typography>
          <Typography sx={main_content_text_p_2}>
            ✅ Valorização estética do veículo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
