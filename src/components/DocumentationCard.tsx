import { DOCUMENTATION_URL } from "@/utils/constants";
import { Box, Button, GridItem, Image, SimpleGrid, useBreakpointValue} from "@chakra-ui/react";
import { ArrowRight } from "iconsax-react";
import { motion } from "framer-motion";

const MotionGridItem = motion(GridItem);

const DocumentationCard = () => {
  const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 }) ?? 18;
  return (
    <Box className="documentation-card">
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <MotionGridItem
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box className="brief">
            <Box className="pre-highlight-card">
              Access Multiple Services with One Smart API connection
            </Box>  

            <Box className="app-title gradient-text">
              All in one solution
            </Box>

            <Box className="content" 
             marginBottom={{ base: "20px", md: "40px", lg: "70px" }}
            >
              Streamline operations, manage costs, and improve speed via a trusted infrastructure built for scale.
            </Box>

            <Button
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
              <Box marginRight="10px" fontSize={{ base: "sm", md: "md", lg: "lg" }} >API Documentation</Box>
              <ArrowRight size={iconSize} variant="TwoTone" color="white" />
            </Button>
          </Box>
        </MotionGridItem>
        <MotionGridItem
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut"}}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box className="content">
            <Image
              src="/images/api-doc-code-bg.png"
              alt="Documentation Image"
              width="100%"
            />
          </Box>
        </MotionGridItem>
      </SimpleGrid>
    </Box>
  );
};

export default DocumentationCard;
