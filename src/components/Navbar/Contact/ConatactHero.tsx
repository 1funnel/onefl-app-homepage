import { Box, Button, Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { DOCUMENTATION_URL } from "@/utils/constants";
import { ArrowRight } from "iconsax-react";

export default function ContactHero() {
  const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 });

   return (
    <Box className="hero">
      <Container>
        <Box className="pre-highlight-card" textAlign="left">
          Real Result, Real Impact
        </Box>
        <h1 className="title">
          We'd love to hear from you
        </h1>
        <Box className="description">
          Our support team is available Monday to Friday, 8 AM - 5 PM (WAT) to assist with product inquiries, partnerships, and technical support.
          Whether you're a bank, fintech, or developer, we're just a message away.
        </Box>


        <Flex
          gap={4}
          align="center"
          justify={{ base: "center", md: "center" }}
          mt={{base: 0, md: 8}}
        >
          <Button
            mt={{base: 2, md: 10}}
            mb={10}
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
            <Box marginRight="10px" fontSize={{ base: "sm", md: "md", lg: "lg" }}>Request A Call</Box>
            <ArrowRight size={iconSize} variant="TwoTone" color="white" />
          </Button>
          <Button
            mt={{base: 2, md: 10}}
            mb={10}
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
            <Box marginRight="10px" fontSize={{ base: "sm", md: "md", lg: "lg" }}>Send a Message</Box>
            <ArrowRight size={iconSize} variant="TwoTone" color="white" />
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
