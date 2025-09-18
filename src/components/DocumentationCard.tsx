import { DOCUMENTATION_URL } from "@/utils/constants";
import { Box, Button, GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import { ArrowRight } from "iconsax-react";

const DocumentationCard = () => {
  return (
    <Box className="documentation-card">
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <GridItem>
          <Box className="brief">
            <Box className="pre-highlight-card">
              Introducing Your All In One Service Provider 🚀
            </Box>

            <Box className="app-title gradient-text">
              Simplifying Access to, Financial Services with{" "}
              <Box as="span" className="special-highlight">Ease.</Box>
            </Box>

            <Box className="content" marginBottom="100px">
              Access your funds in real-time without waiting anytime, anywhere,
              <br />
              Access your funds in real-time without.
            </Box>

            <Button
              bg="brand.primary700"
              color="white"
              _hover={{ bg: "brand.primary600" }}
              rounded="full"
              as="a"
              href={DOCUMENTATION_URL}
              target="_blank"
              size="lg"
            >
              <Box marginRight="10px">API Documentation</Box>
              <ArrowRight size={20} variant="TwoTone" color="white" />
            </Button>
          </Box>
        </GridItem>
        <GridItem>
          <Box className="content">
            <Image
              src="/images/api-doc-code-bg.png"
              alt="Documentation Image"
              width="100%"
            />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default DocumentationCard;
