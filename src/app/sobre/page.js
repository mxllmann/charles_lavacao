
import Main from "../_components/Main";
import AboutContent from "../_pages-content/Sobre";
import Head from 'next/head'

//Definição do título e descrição da página para o usuário e o SEO
export const metadata = {
  title: 'Sobre | Charles Lavação',
  description: 'Lavagem automotiva com qualidade e confiança, conheça mais sobre nós nessa página.',
};

//Página de sobre
export default function Sobre() {
  return (
  
    <Main>
      <AboutContent/>
    </Main>
    
  );
}
