import { Box, Container } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import AboutHero from "@/components/Navbar/About/AboutHero";
import AboutClientele from "@/components/Navbar/About/AboutClinetele";
import AboutFocus from "@/components/Navbar/About/AboutFocus";;
import AboutIntro from "@/components/Navbar/About/AboutIntro";
import AboutText from "@/components/Navbar/About/AboutText";

const About = () => {
  return (
    <Box className="about">
      <Box className="section documentation-section dark-section">
        <Container>
          <AboutHero />
        </Container>
      </Box>

      <Box className="section about-clientele-section dark-section-invert">
         <Container>
            <AboutClientele />
         </Container>
      </Box>

      <Box className="section about-focus-section dark-section">
        <Container>
          <AboutFocus />
        </Container>
      </Box>
      
      <Box className="section testimonials-section dark-section-invert">
        <Container>
          <AboutIntro />
        </Container>
      </Box>

      <Box className="section product-clientele-section dark-section">
        <Container>
          <AboutText />
        </Container>
      </Box>
    </Box>
  );
};

export default About;
