import Footer from "./footer";
import Header from "./header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {

  return (
    <>
      <body>
        <Header />
        <main> {children} </main>
        <Footer />
      </body>
    </>
  );
};

export default DefaultLayout;