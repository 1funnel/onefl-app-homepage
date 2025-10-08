import GetStartedBtn from "@/components/GetStartedBtn";
import { Box, Container, Spacer } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box className="hero">
      <Container>
        <Box className="pre-highlight-card">
          Introducing your all-in-one finance solution 🚀
        </Box>
        <h1 className="title">
          One Platform, Endless Possibilities for Banks and Fintechs 
        </h1>
        <Box className="description">
          Skip the hassle of managing multiple APIs.
          <br/>
          One Funnel unifies everything
          in real time, from KYC to different messaging options, detailed reporting,
          BVN validation & NIN verification, and more. A trial is all you need.
        </Box>

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
