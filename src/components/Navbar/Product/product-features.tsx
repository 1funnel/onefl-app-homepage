import { useState } from "react";
import { Box, Button, SimpleGrid, GridItem, Image, Flex } from "@chakra-ui/react";
import { FeatureTab, ProductFeatureTab } from "@/components/productFeatureTab";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box className="documentation-card">
      <Box my={{ base: 6, md: 10 }} mx={4} fontSize={{ base: "sm", lg: "2xl" }}>
      <Box textAlign="center" mb={8}>
        <Box className="app-title gradient-text" mt={4}>
          Growing your Platform is Hard,<br/>
          <Box as="span" className="special-highlight">One Funnel{" "}</Box>
          Makes it Easier
        </Box>
      </Box>

      <Flex
        justify="center"
        align="center"
        flexWrap="wrap"
        gap={3}
        mb={{ base: 10, md: 16 }}
      >
        {FeatureTab.map((tab, index) => {
          const isActive = index === activeTab;
          return (
            <Button
              key={index}
              onClick={() => setActiveTab(index)}
              bg={isActive ? "brand.primary700" : "transparent"}
              color="white"
              border="1px solid"
              borderColor={isActive ? "brand.primary700" : "gray.600"}
              rounded="full"
              fontSize={{ base: "sm", md: "md" }}
              px={5}
              py={2}
              transition="all 0.25s ease"
              _hover={{
                bg: isActive ? "brand.primary700" : "#17172fff",
                borderColor: "white",
              }}
              _active={{ bg: "brand.primary600" }}
            >
              {tab.id.split(" (")[0]}
            </Button>
          );
        })}
      </Flex>


      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <GridItem>
          <ProductFeatureTab item={FeatureTab[activeTab]} />
        </GridItem>

        <GridItem>
          <Box>
            <Image
              src="/images/product-feature.svg"
              alt="feature-image"
              objectFit="cover"
              width="100%"
              height="100%"
              borderRadius="xl"
            />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
    </Box>
  );
};

export default ProductTab;
