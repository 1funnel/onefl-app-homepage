import Hero from "./Hero";
import { Box, Container } from "@chakra-ui/react";
import TrustedClientele from "./TrustedClientele";
import ProductIntro from "./ProductIntro";
import FeatureTabs from "./FeatureTabs";
import Testimonials from "./Testimonials";
import TextFeatured from "./TextFeatured";
import Faqs from "@/components/Faqs";
import DocumentationCard from "@/components/DocumentationCard";

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

      <Box className="section testimonials-section dark-section-invert">
        <Container>
          <Testimonials />
        </Container>
      </Box>

      <Box className="section text-featured-section dark-section">
        <Container>
          <TextFeatured />
        </Container>
      </Box>

      <Box className="section faqs-section dark-section-invert">
        <Container>
          <Faqs />
        </Container>
      </Box>

      <Box className="section documentation-section dark-section">
        <Container>
          <DocumentationCard />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
