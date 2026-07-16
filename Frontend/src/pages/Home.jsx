import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import About from "../components/About/About";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Departments from "../components/Departments/Departments";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
<WhyChoose />
<Departments />
    </>
  );
}

export default Home;