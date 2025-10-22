import GetStartedBtn from "@/components/GetStartedBtn";
import { Box } from "@chakra-ui/react";

const AboutText = () => {

  return (
    <>
      <Box className="trusted-by">
        <Box className="content">
          <Box mt={{base: 4, md: 14}} mb={4} fontSize={{base: 20, md: 30, lg: 40}} fontWeight="bold">
            We Aggregate with Ease,<br/>
            You {" "}
            <span className="special-highlight">Launch</span>{" "}With{" "}
            <span className="special-highlight">Confidence</span>
          </Box>
          <Box mb={10}>
            Join the OneFunnel network today and experience seamless integration like never before.
          </Box>

          <GetStartedBtn />
        </Box>
      </Box>
    </>
  );
};

export default AboutText;