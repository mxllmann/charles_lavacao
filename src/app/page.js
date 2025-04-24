
import Main from "./_components/Main";
import HomeContent from './_pages-content/Home'

//Definição do título e descrição da página para o usuário e o SEO
export const metadata = {
  title: 'Início | Charles Lavação',
  description: 'Lavagem automotiva com qualidade e confiança, seja bem vindo!',
};

//Página de home, é a rota '/' do navegador
export default function Home() {
  return (
    
    <Main>
      <HomeContent/>
    </Main>
  
  );
}
