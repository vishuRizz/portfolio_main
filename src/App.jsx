import ButtonGradient from "./assets/svg/ButtonGradient";
import Projects from "./components/Projects";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.6rem] overflow-hidden">
        <Header />
        <Hero />
        <Projects />
        <SkillSection />
        
        <Roadmap />
        <Services />
        {/* <ContactMe/> */}
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
