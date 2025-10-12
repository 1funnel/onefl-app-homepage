import GetStartedBtn from "@/components/GetStartedBtn";
import { Box } from "@chakra-ui/react";

const TextFeatured = () => {
  return (
    <Box className="text-featured">
      <Box className="app-title" textAlign="center">
        Build Smarter,{" "}                    
        <Box as="span" className="special-highlight">
          Launch
        </Box>{" "}Faster,
        Integrate{" "}
        <Box as="span" className="special-highlight">
          Once
        </Box>
      </Box>

      <GetStartedBtn />
    </Box>
  );
};

export default TextFeatured;
