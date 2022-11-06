import CustomHead from "./CustomHead";
import Footer from "./footer";
import Header from "./header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {

  return (
    <html lang="en">
      <CustomHead />
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
};

export default DefaultLayout;