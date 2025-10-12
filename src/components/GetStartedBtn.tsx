import { MERCHANT_APP_URL } from "@/utils/constants";
import { Box, Button, useBreakpointValue } from "@chakra-ui/react";
import { ArrowRight } from "iconsax-react";

const GetStartedBtn = () => {
  const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 });
  return (
    <Button
      bg="brand.primary700"
      color="white"
      _hover={{ bg: "brand.primary600" }}
      rounded="full"
      as="a"
      href={MERCHANT_APP_URL}
      // size="lg"
      size={{ base: "sm", md: "md", lg: "lg" }}
      px={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 2, md: 3, lg: 4 }}
    >
      <Box marginRight="10px"
      fontSize={{ base: "sm", md: "md", lg: "lg" }}
      >
        Get Started Now
      </Box>
      <ArrowRight size={iconSize} variant="TwoTone" color="white" />
    </Button>
  );  
};

export default GetStartedBtn;
