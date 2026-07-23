import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import VisionMission from "../components/VisionMission/VisionMission";
import About from "../components/About/About";
import Departments from "../components/Departments/Departments";
import Campuslife from "../components/Campuslife/Campuslife";
import Events from "../components/Events/Events";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Contact from "../components/Contact/Contact";
import Placement from "../components/Placement/Placement";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <VisionMission />
      <About />
      <Departments />
      <Campuslife />
      <Events />
<WhyChoose />
<Contact />
      <Placement />
    </>
  );
}

export default Home;