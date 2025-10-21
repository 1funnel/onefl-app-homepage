import { Box, GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import GetStartedBtn from "@/components/GetStartedBtn";


const ProductHero = () => {;
  return (
    <Box className="documentation-card" mb={10}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <GridItem textAlign="left">
          <Box className="brief">
            <Box className="pre-highlight-card">
              Introducing new products
            </Box>  

            <Box className="app-title gradient-text" mt={4}>
              All Your Core Services,<br/>
              One Secure {" "}
              <Box as="span" className="special-highlight">Integration</Box>
            </Box>

            <Box className="content" 
             marginBottom={{ base: "20px", md: "40px", lg: "70px" }}
             padding="10px 20px 0 0"
            >
              Whether you're a bank expanding your digital services or a fintech building for scale. OneFunnel connects you to 
              everything you need from payments and KYC to messaging, airtime and bill payments through one powerful integration.<br/><br/>
              Simplify your backend, reudce your vendor cmplexity and accerlerate innovation with Africa's trusted API infrastructure. 
            </Box>

            <GetStartedBtn />
          </Box>
        </GridItem>
        <GridItem>
          <Box className="content" mt={{base: 6, md: 10}}>
            <Image
              src="/images/product-hero.svg"
              alt="Documentation Image"
            />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default ProductHero;
