import GlobalStyles from '@mui/material/GlobalStyles';
import Head from 'next/head';
import { body,  globalStylesDefinition} from "./_style/style"
import Header from "./_components/Header";
import WhatsAppButton from "./_components/WhatsAppButton";
import Footer from "./_components/Footer";

//Aqui é página de layout padrão, tudo que estiver nela vai para todas as outras pages

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" /> 
      {/* Arquivo de configuração para "adicionar a tela de início" em dispositivos mobile */}
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
      <GlobalStyles styles={globalStylesDefinition} /> 
      {/* Componente do Material UI para que eu possa aplicar estilos globais */}
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
