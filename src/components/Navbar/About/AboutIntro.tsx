import { Box, SimpleGrid, GridItem, } from "@chakra-ui/react";

const teamMembers = [
  {
    name: "Chike Orji",
    designation: "Chief Executive Officer (CEO)",
    image: "/images/team-frame.svg"
  },
  {
    name: "Adekunle Adeyemi",
    designation: "Chief Operations Officer (COO)",
    image: "/images/team-frame.svg"
  },
  {
    name: "Olorunfemi Hanson",
    designation: "Chief Marketing Officer (CMO)",
    image: "/images/team-frame.svg"
  },
  {
    name: "Olufunmilayo Tugbobo",
    designation: "Company Secretary",
    image: "/images/team-frame.svg"
  },
  {
    name: "Oladipupo Aina",
    designation: "Chief Technology Officer (CTO)",
    image: "/images/team-frame.svg"
  },  
];


const AboutIntro = () => {
  const isOdd = teamMembers.length % 2 !== 0;

  return (
    <Box className="testimonials">
        <Box>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
              <GridItem>
                    <Box className="brief">
                      <Box color="brand.primary700" fontSize="20px" marginBottom="10px" fontWeight="bold">
                        MEET OUR TEAM
                      </Box>  
        
                      <Box className="app-title gradient-text">
                        Driven by Expertise and Passion
                      </Box>
                    </Box>  
                </GridItem>
                <GridItem>
                  <Box className="brief">
                    <Box className="content" 
                     marginBottom={{ base: "20px", md: "40px", lg: "70px" }}
                     fontWeight="500"
                     marginTop={{base: 0, md: 10}}
                     textAlign={{ base: "left", md: "right" }}
                    >
                      Behind every seamless integration is a team of fintech innovators,
                      product experts, and engineers dedicated to shaping Africa's financial future.
                    </Box>
        
                  </Box>
                </GridItem>
            </SimpleGrid>
        </Box>

        <Box 
          mt={10}
          p={{ base: 4, md: 6, lg: 8 }}
          width={{base: "100%", md: "80%"}}
          display="flex"
          justifyContent="center"
          mx="auto"
        >
          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 2 }} 
            spacing={{ base: 6, md: 20 }}
            sx={isOdd ? { "& > *:last-child": { gridColumn: "1 / -1", justifySelf: "center", width: "50%" } } : {}}
          >
            {teamMembers.map((team, index) => (
              <Box key={index}>
                <Box mb={3}>
                  <Box 
                    color="white" 
                    fontSize="16px" 
                    fontWeight="600"
                    mb={1}
                    borderTop="1px solid rgba(100, 150, 255, 0.4)"
                  >
                    <Box mt={10} >{team.name}</Box>
                  </Box>
                  <Box 
                    color="rgba(255, 255, 255, 0.6)" 
                    fontSize="13px"
                  >
                    {team.designation}
                  </Box>
                </Box>
              
              <Box
                width="100%"
                height={{base: "250px", md: "350px"}}
                bg="rgba(255, 255, 255, 0.05)"
                borderRadius="8px"
                overflow="hidden"
                position="relative"
                mb={10}
              >
                <Box
                  as="img"
                  src={team.image}
                  alt={team.name}
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
