import { Box, Container } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import AboutHero from "@/components/Navbar/About/about-hero";
import AboutClientele from "@/components/Navbar/About/about-clinetele";
import AboutFocus from "@/components/Navbar/About/about-focus";;
import AboutIntro from "@/components/Navbar/About/about-intro";
import AboutText from "@/components/Navbar/About/about-text";

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
