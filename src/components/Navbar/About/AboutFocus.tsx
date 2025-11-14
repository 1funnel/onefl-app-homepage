import { Box, GridItem, SimpleGrid, UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import { Eye, Share, Level } from "iconsax-react";


const focusItems = [
  {
    title: "Identity & KYC",
    description:
      "BVN and NIN",
  },
  {
    title: "Payments",
    description:
      "Airtime, data, and bill payments",
  },
  {
    title: "Messaging",
    description:
      "SMS, USSD, and notifications",
  },
  {
    title: "Integrations",
    description:
      "One connection, multiple essential APIs",
  },
]  

const AboutFocus = () => {
  return (
    <Box className="documentation-card" mt={{base: 5, md: 10}}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <GridItem>
          <Box className="brief">
            <Box color="brand.primary700" fontSize={{base: 15, lg: 20}} marginBottom="10px" fontWeight="bold">
                OUR FOCUS
            </Box>  

            <Box className="gradient-text" fontSize={{base: 20, md: 25, lg: 30}} fontWeight="bold" width={{base: "100%", md : "60%"}}>
              Tailored Solutions for {" "} <span className="special-highlight">Fintechs</span>
              {" "} & {" "} <span className="special-highlight">Financial Institutions</span>
            </Box>
            <Box className="content" 
             marginBottom={{ base: "20px", md: "40px", lg: "70px" }}
             marginTop={{base:5, md:5}}
             fontSize={15}
             padding="0 15px 0 0"
            >
              OneFunnel simplifies how financial institutions connect and scale. 
              Our platform provides secure, unified APIs that reduce vendor complexity and accelerate product launches
               — helping you operate efficiently and innovate faster.
            </Box>

            <UnorderedList spacing={3} fontSize={15} mb={{ base: 10, md: 20 }} pl={2}>
              {focusItems.map((focus, index) => (
                <ListItem key={index}>
                  <Flex align="flex-start"  mt={6}>
                    <Box mr={2}>
                      {focus.title} : 
                    </Box>
                    <Box flex="1">
                      {focus.description}
                    </Box>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>

          </Box>
        </GridItem>

        <GridItem>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap="20px"
            mt={{base: 5, md: 10}}
          >
            <Box 
              border="1px solid #4990a6ff" 
              borderRadius="12px"
              p="25px"
              display="flex"
              flexDirection="column"
              gap="16px"
            >
              <Box>
                <Box 
                  border="1px solid #4990a6ff" 
                  borderRadius="8px" 
                  p="18px"
                  mb={10}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Level size={24} color="#4990a6ff" />
                </Box>
                <Box color="white" fontSize="16px" fontWeight="600" mb="8px">
                  Our Mission
                </Box>
                <Box color="rgba(255,255,255,0.6)" fontSize="14px">
                  To simplify financial infrastructure for Africa’s digital economy.
                </Box>
              </Box>
            </Box>

            <Box 
              border="1px solid #4990a6ff" 
              borderRadius="12px"
              p="25px"
              display="flex"
              flexDirection="column"
              gap="16px"
            >
              <Box>
                <Box 
                  border="1px solid #4990a6ff" 
                  borderRadius="8px" 
                  p="18px"
                  mb={10}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Eye size={24} color="#4990a6ff" />
                </Box>
                <Box color="white" fontSize="16px" fontWeight="600" mb="8px">
                  Vision
                </Box>
                <Box color="rgba(255,255,255,0.6)" fontSize="14px">
                  To be Africa's most trusted fintech infrastructure.
                </Box>
              </Box>
            </Box>

            <Box 
              gridColumn={{ base: "1", md: "1 / -1" }}
              border="1px solid #4990a6ff"
              borderRadius="12px"
              p="25px"
              display="flex"
              flexDirection="column"
              gap="16px"
            >
              <Box 
                border="1px solid #4990a6ff" 
                borderRadius="8px" 
                p="18px"
                mb={10}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                width={16}
              >
                <Share color="#4990a6ff" />
              </Box>
              <Box>
                <Box color="white" fontSize="18px" fontWeight="600" mb="8px">
                  Promise
                </Box>
                <Box color="rgba(255,255,255,0.6)" fontSize="14px">
                  Reliability. Transparency. Innovation.
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default AboutFocus;
