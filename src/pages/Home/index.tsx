import Hero from "./Hero";
import { Box, Container } from "@chakra-ui/react";
import TrustedClientele from "./TrustedClientele";
import ProductIntro from "./ProductIntro";
import FeatureTabs from "./FeatureTabs";

const Home = () => {
  return (
    <Box className="home">
      <Box className="section hero-section dark-section">
        <Hero />
      </Box>

      <Box className="section trusted-clientele-section dark-section">
        <Container>
          <TrustedClientele />
        </Container>
      </Box>

      <Box className="section product-intro-section dark-section">
        <Container>
          <ProductIntro />
        </Container>
      </Box>

      <Box className="section app-features-tab dark-section">
        <Container>
          <FeatureTabs />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
