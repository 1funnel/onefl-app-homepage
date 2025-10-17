import { Box, Container } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
// import ContactHero from "../../components/Navbar/Contact/contact-hero"       
// import ContactChat from "@/components/Navbar/Contact/contact-chat";
import AboutHero from "@/components/Navbar/About/about-hero";
import AboutClientele from "@/components/Navbar/About/about-clinetele";
import AboutFocus from "@/components/Navbar/About/about-focus";
// import Testimonials from "@/components/Navbar/About/about-intro";
import AboutIntro from "@/components/Navbar/About/about-intro";

const About = () => {
  return (
    <Box className="about">
      <Box className="section documentation-section dark-section">
        <Container>
          <AboutHero />
        </Container>
      </Box>

      <Box className="section trusted-clientele-section dark-section">
         <Container>
            <AboutClientele />
         </Container>
      </Box>

      <Box className="section focus-section dark-section">
        <Container>
          <AboutFocus />
        </Container>
      </Box>
      
      <Box className="section testimonials-section dark-section">
        <Container>
          <AboutIntro />
        </Container>
      </Box>

      {/* <Box className="section chat-intro-section dark-section">
        <Container>
          <ContactChat />
        </Container>
      </Box> */}
    </Box>
  );
};

export default About;
