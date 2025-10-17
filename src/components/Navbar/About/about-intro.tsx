import { Box, SimpleGrid, GridItem, } from "@chakra-ui/react";

const teamMembers = [
  {
    name: "Chike Orji",
    designation: "CEO and Co-Founder",
    image: "#"
  },
  {
    name: "Adekunle Adeyemi",
    designation: "CTO",
    image: "#"
  },
  {
    name: "Olorunfemi Hanson",
    designation: "CFO",
    image: "#"
  },
  {
    name: "Olufunmilayo Tijabosho",
    designation: "Company Secretary",
    image: "#"
  },
  {
    name: "Yetunde Adekoya",
    designation: "Executive Assistant",
    image: "#"
  },
  {
    name: "Chike Orji",
    designation: "CEO and Co-Founder",
    image: "#"
  }
];


const AboutIntro = () => {

  return (
    <Box className="testimonials">
        <Box>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
                <GridItem>
                  <Box className="brief">
                    <Box className="content" 
                     marginBottom={{ base: "20px", md: "40px", lg: "70px" }}
                     fontWeight="500"
                     marginTop={{base: 5, md: 10}}
                    >
                      One Funnel is powered by experts in Fintech, products, operations<br/>
                      and marketing. Meet our team, driven by innovation and excellence.
                    </Box>
        
                  </Box>
                </GridItem>
                <GridItem>
                    <Box className="brief" textAlign={{ base: "left", md: "right" }}>
                      <Box color="brand.primary700" fontSize="20px" marginBottom="10px" fontWeight="bold">
                        MEET OUR TEAM -
                      </Box>  
        
                      <Box className="app-title gradient-text">
                        Driven by Expertise and Passion
                      </Box>
                    </Box>  
                </GridItem>
            </SimpleGrid>
        </Box>

        <Box 
          mt={10}
          p={{ base: 4, md: 6, lg: 8 }}
        >
          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 3 }} 
            spacing={{ base: 6, md: 8 }}
          >
            {teamMembers.map((member, index) => (
              <Box key={index}>
                <Box mb={3}>
                  <Box 
                    color="white" 
                    fontSize="16px" 
                    fontWeight="600"
                    mb={1}
                    borderTop="1px solid rgba(100, 150, 255, 0.4)"
                    // mt={5} 
                  >
                    <Box mt={10} >{member.name}</Box>
                  </Box>
                  <Box 
                    color="rgba(255, 255, 255, 0.6)" 
                    fontSize="13px"
                  >
                    {member.designation}
                  </Box>
                </Box>
              
              <Box
                width="100%"
                height="250px"
                bg="rgba(255, 255, 255, 0.05)"
                borderRadius="8px"
                overflow="hidden"
                position="relative"
                mb={10}
              >
                <Box
                  as="img"
                  src={member.image}
                  alt={member.name}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  opacity={0.8}
                />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

    </Box> 
  );
};

export default AboutIntro;
