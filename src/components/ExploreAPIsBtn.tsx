import { Box, Button } from "@chakra-ui/react";
import { ArrowRight } from "iconsax-react";
import { DOCUMENTATION_URL } from "@/utils/constants";

const ExploreAPIsBtn = () => {
  return (
    <Button
      marginTop={5}
      bg="brand.primary700"
      color="white"
      _hover={{
        bg: "brand.primary600",
      }}
      rounded="full"
      as="a"
      href={DOCUMENTATION_URL}
      size="lg"
    >
      <Box marginRight="10px">Explore our APIs now</Box>
      <ArrowRight size={20} variant="TwoTone" color="currentColor" />
    </Button>
  );
};

export default ExploreAPIsBtn;
