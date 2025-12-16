import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Layout({children}) {
  return (
    <>
      <main>
        <Header />
        <main>{children}</main>
        <Footer />
      </main>
    </>
  );
}

export default Layout;
