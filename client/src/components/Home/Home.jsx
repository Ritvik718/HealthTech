import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
// import Tester from "../Tester/Tester";
// import Result from "../Result/Result";
import ArticleText from "../Articles/ArticleText";
import ArticleBox from "../Articles/ArticleBox";
import Footer from "../Footer/Footer";
import About from "../About/About";
import FAQ from "../FAQ/Faq";

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <ArticleText />
      <ArticleBox />
      <FAQ />
      <Footer />
    </div>
  );
}
export default Home;
