import Main from "../_components/Main";
import ServicosContent from "../_pages-content/Servicos"

//Definição do título e descrição da página para o usuário e o SEO
export const metadata = {
  title: 'Serviços | Charles Lavação',
  description: 'Lavagem automotiva com qualidade e confiança, conheça mais de nossos serviços nessa página.',
};

//Página de serviços
export default function Servicos() {
  return (
  
  <Main>
    <ServicosContent/>
  </Main>
  )}
