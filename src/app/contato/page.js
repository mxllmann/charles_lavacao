
import Main from "../_components/Main";
import ContactContent from "../_pages-content/Contato";

//Definição do título e descrição da página para o usuário e o SEO
export const metadata = {
  title: 'Contato | Charles Lavação',
  description: 'Lavagem automotiva com qualidade e confiança, confira nossas informações de contato nessa página.',
};

//Página de contato
export default function Contato() {
  return (
    <Main>
      <ContactContent/>
    </Main>
  );
}
