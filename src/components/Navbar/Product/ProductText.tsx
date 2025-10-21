import { MERCHANT_APP_URL } from "@/utils/constants";
import { Box, Button, useBreakpointValue } from "@chakra-ui/react";
import { ArrowRight } from "iconsax-react";


const ProductText = () => {
  const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 });

  return (
    <>
      <Box className="trusted-by">
        <Box className="content"  mt={10}>
          <Box mt={4} mb={4} fontSize={{base: 20, md: 30, lg:40}} fontWeight="bold">
            So Why Build Across Platforms,<br/>
            When You Can Do It {" "}
            <span className="special-highlight">All In One?</span>
          </Box>
          <Box mb={10}>With One Funnel, you get a single, secure integration that connects<br/>
             your business to the APIs powering Africa's digital future.
          </Box>

          <Button
            my={10}
            bg="brand.primary700"
            color="white"
            _hover={{ bg: "brand.primary600" }}
            rounded="full"
            as="a"
            href={MERCHANT_APP_URL}
            target="_blank"
            size={{ base: "sm", md: "md", lg: "lg" }}
            px={{ base: 4, md: 6, lg: 8 }}
            py={{ base: 2, md: 3, lg: 4 }}
          >
            <Box marginRight="10px" fontSize={{ base: "sm", md: "md", lg: "lg" }}>Get Started With One Funnel</Box>
            <ArrowRight size={iconSize} variant="TwoTone" color="white" />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductText;