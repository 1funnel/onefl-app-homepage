import Container from "@/components/Container";
import Hero from "./Hero";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box className="hero-section">
      <Container>
        <Hero />
      </Container>
    </Box>
  );
};

export default Home;
