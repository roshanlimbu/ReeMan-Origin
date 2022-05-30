//This is home page, It will contains all the sections require in this page.

import HeroSection from "../Sections/Hero";
import About from "../Sections/About";
import Services from "../Sections/Services";
import Testimonials from "../Sections/Testimonials";
import Contact from "../Sections/Contact";
import styled from "styled-components";
import RoadMap from "../Sections/RoadMap";
import Faq from "../Sections/Faq";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      <RoadMap />
      <Testimonials />
      <Faq />
      <Contact />
    </Container>
  );
};

export default Home;
