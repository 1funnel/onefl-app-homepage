import { MERCHANT_APP_URL } from "@/utils/constants";
import { Box, Button } from "@chakra-ui/react";
import { ArrowRight } from "iconsax-react";

const GetStartedBtn = () => {
  return (
    <Button
      bg="brand.primary700"
      color="white"
      _hover={{ bg: "brand.primary600" }}
      rounded="full"
      as="a"
      href={MERCHANT_APP_URL}
      size="lg"
    >
      <Box marginRight="10px">Get Started</Box>
      <ArrowRight size={20} variant="TwoTone" color="white" />
    </Button>
  );
};

export default GetStartedBtn;
