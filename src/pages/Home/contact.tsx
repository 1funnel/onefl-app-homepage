import { Box, Container } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import ContactHero from "../../components/Navbar/Contact/ConatactHero"
import ContactChat from "@/components/Navbar/Contact/ContactChat";

const Contact = () => {
  return (
    <Box className="contact">
      <Box className="section hero-section dark-section">
        <Container>
          <ContactHero />
        </Container>
      </Box>

      <Box className="section chat-intro-section dark-section">
        <Container>
          <ContactChat />
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
