import GetStartedBtn from "@/components/GetStartedBtn";
import { Box, Container, Spacer } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box className="hero">
      <Container>
        <Box className="pre-highlight">
          Introducing your all-in-one finance solution 🚀
        </Box>
        <h1 className="title">
          Simplifying Access to <br />
          Financial Services with{" "}
          <Box as="span" color="brand.primary700">
            Ease.
          </Box>
        </h1>
        <p className="description">
          Access your funds in real-time without waiting anytime, anywhere,{" "}
          <br />
          Access your funds in real-time without.
        </p>

        <GetStartedBtn />

        <Spacer />

        <Box className="hero-image">
          <img
            src="/images/hero-img.svg"
            alt="Hero Image"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
