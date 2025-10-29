import { useState } from "react";
import { Box, IconButton, SimpleGrid, GridItem, Image, Flex, useBreakpointValue, Button } from "@chakra-ui/react";
import { ArrowRight } from "iconsax-react";
import { FeatureTab, ProductFeatureTab } from "@/components/productFeatureTab";

const ProductTab = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0); 
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const iconSize = useBreakpointValue({ base: 18, md: 22, lg: 24 });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FeatureTab.length);
  };

  const currentItem = FeatureTab[currentIndex];

  return (
    <Box className="documentation-card">
      <Box textAlign="center" mb={8}>
        <Box className="app-title gradient-text" mt={4}>
          Growing your Platform is Hard,<br/>
          <Box as="span" className="special-highlight">OneFunnel{" "}</Box>
          Makes it Easier
        </Box>
      </Box>
      
      {/* for small screen */}
      {isSmallScreen ? (
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px" my={{base: "10px", md: "100px"}}>
          <GridItem>
            <Flex justify="flex-start" mb={4} gap={3}>
              <Box  color="white"  display="flex" alignItems="center">
                Click to view next feature
              </Box>
              <IconButton
                aria-label="Next feature"
                icon={<ArrowRight size={iconSize} variant="TwoTone" color="white" />}
                onClick={handleNext}
                bg="transparent"
                _hover={{ bg: "#17172fff", borderColor: "white" }}
                _active={{ bg: "whiteAlpha.300" }}
                _focus={{ boxShadow: "none" }}
                rounded="full"
                border="1px solid #37376fff"
                size="md"
                textAlign="right"
              />
            </Flex>
    
            <ProductFeatureTab item={currentItem} />
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
      ) : (
        // for large screen
        <>
          <Flex
            justify="center"
            align="center"
            flexWrap="wrap"
            gap={3}
            mb={20}
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
                  width="95%"
                  height="100%"
                  borderRadius="xl"
                />
              </Box>
            </GridItem>
          </SimpleGrid>
        </>
      )}  
    </Box>
  );
};

export default ProductTab;