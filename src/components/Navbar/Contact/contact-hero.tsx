import { Box, Button, Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { DOCUMENTATION_URL } from "@/utils/constants";
import { ArrowRight } from "iconsax-react";

export default function ContactHero() {
  const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 });

   return (
    <Box className="hero">
      <Container>
        <Box className="pre-highlight-card">
          Real Result, Real Impact
        </Box>
        <h1 className="title">
          We would love to hear from you
        </h1>
        <Box className="description">
         Our Support Team is available Monday - Friday, 8AM - 5PM
        </Box>


        <Flex
          gap={4}
          align="center"
          justify={{ base: "center", md: "center" }}
          mt={8}
        >
          <Button
                  my={10}
                  bg="#1a1a36ff"
                  border="1px solid #37376fff"
                  color="white"
                  _hover={{ bg: "#17172fff" }}
                  rounded="full"
                  as="a"
                  href={DOCUMENTATION_URL}
                  target="_blank"
                  size={{ base: "sm", md: "md", lg: "lg" }}
                  px={{ base: 4, md: 6, lg: 8 }}
                  py={{ base: 2, md: 3, lg: 4 }}
                >
                  <Box marginRight="10px" fontSize={{ base: "sm", md: "md", lg: "lg" }}>Phone Call</Box>
                  <ArrowRight size={iconSize} variant="TwoTone" color="white" />
          </Button>
          <Button
                  my={10}
                  bg="brand.primary700"
                  color="white"
                  _hover={{ bg: "brand.primary600" }}
                  rounded="full"
                  as="a"
                  href={DOCUMENTATION_URL}
                  target="_blank"
                  size={{ base: "sm", md: "md", lg: "lg" }}
                  px={{ base: 4, md: 6, lg: 8 }}
                  py={{ base: 2, md: 3, lg: 4 }}
                >
                  <Box marginRight="10px" fontSize={{ base: "sm", md: "md", lg: "lg" }}>Send Ticket</Box>
                  <ArrowRight size={iconSize} variant="TwoTone" color="white" />
          </Button>

        </Flex>
      </Container>
    </Box>
  );
}
