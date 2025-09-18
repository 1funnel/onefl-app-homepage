import GetStartedBtn from "@/components/GetStartedBtn";
import { Box } from "@chakra-ui/react";

const TextFeatured = () => {
  return (
    <Box className="text-featured">
      <Box className="app-title" textAlign="center">
        We Aggregate with Ease, <br /> You{" "}
        <Box as="span" className="special-highlight">
          Launch
        </Box>{" "}
        with{" "}
        <Box as="span" className="special-highlight">
          Confidence
        </Box>
      </Box>

      <GetStartedBtn />
    </Box>
  );
};

export default TextFeatured;
