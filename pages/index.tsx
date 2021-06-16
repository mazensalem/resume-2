import Header from "../components/header";
import Sidebar from "../components/sidebar";
import About from "../components/about";
import Experience from "../components/experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Portfolio from "../components/portfolio";

const IndexPage = () => (
  <>
    <Header />
    <Sidebar />
    <About />
    <Experience />
    <div className="hidden md:block ml-44 bg-black opacity-50 h-0.5 mt-3" />
    <Education />
    <Skills />
    <Portfolio />
    <div className="bg-black text-white text-center md:text-lg">
      &copy; Mazen Salem. All rights reserved.
    </div>
  </>
);

export default IndexPage;
