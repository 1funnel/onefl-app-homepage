import { Box, GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import GetStartedBtn from "@/components/GetStartedBtn";


const AboutHero = () => {
//   const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 }) ?? 18;
  return (
    <Box className="documentation-card">
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <GridItem>
          <Box className="brief">
            <Box className="pre-highlight-card">
              About Us
            </Box>  

            <Box className="app-title gradient-text">
              Simplifying Access to Financial Services
            </Box>

            <Box className="content" 
             marginBottom={{ base: "20px", md: "40px", lg: "70px" }}
             p={2}
            >
              Discover One Funnel's mission to deliver Fintech-as-a-Service solutions,<br/>
              designed for startups and fintechs needing BVN/NIN queries, <br/> phone verification,
              SMS, USSD, bill payments, transfers and more.
            </Box>

            <GetStartedBtn />

            {/* <Button
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
            </Button> */}
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
