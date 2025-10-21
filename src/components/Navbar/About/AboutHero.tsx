import { Box, GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import GetStartedBtn from "@/components/GetStartedBtn";


const AboutHero = () => {;
  return (
    <Box className="documentation-card">
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <GridItem>
          <Box className="brief">
            <Box className="pre-highlight-card">
              About Us
            </Box>  

            <Box className=" gradient-text" fontSize={{base: 20, md: 30, lg: 40}} fontWeight="bold" width={{base: "100%", md : "70%"}}>
              Powering {" "}<span className="special-highlight">Africa's</span>{" "}Fintech Infrastructure
            </Box>

            <Box className="content" 
             marginBottom={{ base: "20px", md: "40px", lg: "70px" }}
             p={2}
            >
              At OneFunnel, we're building the backbone for Africa's next generation of financial innovation.<br/>
              We empower financial institutions to simplify operations and scale faster — through one reliable, 
              developer-friendly integration that connects all essential services.
            </Box>

            <GetStartedBtn />

          </Box>
        </GridItem>
        <GridItem>
          <Box className="content">
            <Image
              src="/images/about-hero.svg"
              alt="Documentation Image"
              width="100%"
            />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default AboutHero;
