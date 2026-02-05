import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";

const values = [
  {
    title: "Customer-First by Design",
    description:
      "We build with our customers at the centre prioritising ease of integration, faster time to market, and dependable performance that supports long-term business growth.",
  },
  {
    title: "Ownership & Accountability",
    description:
      "We empower our people to take ownership, make informed decisions, and execute with speed, responsibility, and clarity.",
  },
  {
    title: "Trust by Design",
    description:
      "We operate with transparency, ethical judgement, and accountability, because trust is the foundation of our infrastructure.",
  },
  {
    title: "Ecosystem Collaboration",
    description:
      "We collaborate openly with developers, partners, and stakeholders, embracing diverse perspectives to build stronger, scalable solutions.",
  },
  {
    title: "Practical Innovation",
    description:
      "We innovate with purpose, balancing creativity with practicality to deliver reliable, future-ready solutions that solve real problems.",
  },
];

const AboutValues = () => {
  return (
    <Box className="testimonials">
      <Box mt={{base: 0, md:15}}>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
          <GridItem>
            <Box className="brief">
              <Box
                className="app-title gradient-text"
                color="brand.primary700"
                mt={5}
              >
                Our Core Values
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box className="brief">
              <Box
                className="content"
                marginBottom={{ base: "20px", md: "40px", lg: "70px" }}
                fontWeight={{ base: 400, md: 500 }}
                marginTop={{ base: 0, md: 10 }}
                textAlign={{ base: "left", md: "right" }}
              >
                The principles that guide how we build, operate, and partner
                across Africa’s technology ecosystem.
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Box>

      <Box
        mt={4}
        p={{ base: 0, md: 2 }}
        width={{ base: "90%", md: "100%" }}
        display="flex"
        justifyContent="center"
        mx="auto"
      >
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 4, md: 10 }}>
          {values.map((val, index) => (
            <Box key={index}>
              <Box mb={3}>
                <Box
                  color="white"
                  border="2px solid rgba(100, 150, 255, 0.4)"
                  borderRadius="10px"
                  p={4}
                  _hover={{ bg: "brand.primary700" }}
                  h={{ base: "230px", md: "250px" }}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-around"
                >
                  <Box margin="0px 0 15px 0" fontSize="20px" fontWeight="600">
                    {val.title}
                  </Box>
                  <Box fontSize="14px">{val.description}</Box>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AboutValues;
