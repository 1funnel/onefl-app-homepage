import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
// import GetStartedBtn from "@/components/GetStartedBtn";
import { Eye, Share } from "iconsax-react";

const AboutFocus = () => {
//   const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 }) ?? 18;
  return (
    <Box className="documentation-card">
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <GridItem>
          <Box className="brief">
            <Box color="brand.primary700" fontSize="20px" marginBottom="10px" fontWeight="bold">
               - OUR FOCUS
            </Box>  

            <Box className="app-title gradient-text">
              Tailored Solutions for Fintechs
            </Box>

            <Box className="content" 
             marginBottom={{ base: "20px", md: "40px", lg: "70px" }}
             marginTop={{base:5, md:20}}
             fontSize={{base: 13, md: 15}}
            >
              One Funnel streamlines fintech with tailored solutions for startups including BVN/NIN queries,
              phone verification,
              SMS, USSD, bill payments, transfers and more.
            </Box>

          </Box>
        </GridItem>
        <GridItem>
            <Box 
                borderTop="1px solid #4990a6ff" 
                p="30px 0px"
                marginTop={{base: 5, md: 10}}
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Box>
                  <Box color="white" fontSize="18px" fontWeight="600" mb="8px">
                    Our Vision
                  </Box>
                  <Box color="rgba(255,255,255,0.6)" fontSize="14px">
                    Driving Innovation, Putting<br/>Customers First
                  </Box>
                </Box>
                <Box 
                  border="1px solid #4990a6ff" 
                  borderRadius="8px" 
                  p="12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Eye size={24} color="#4990a6ff" />
                </Box>
            </Box>

              {/* Journey Card */}
            <Box 
                borderTop="1px solid #4990a6ff" 
                pt="30px"
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Box>
                  <Box color="white" fontSize="18px" fontWeight="600" mb="8px">
                    Our Journey
                  </Box>
                  <Box color="rgba(255,255,255,0.6)" fontSize="14px">
                    From Vision to Reality
                  </Box>
                </Box>
                <Box 
                  border="1px solid #4990a6ff" 
                  borderRadius="8px" 
                  p="12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Share size={24} color="#4990a6ff" />
                </Box>
            </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default AboutFocus;
