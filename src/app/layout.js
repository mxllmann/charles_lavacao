import "./_style/globals.css";
import Header from "./_components/Header";
import WhatsAppButton from "./_components/WhatsAppButton";
import Footer from "./_components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
