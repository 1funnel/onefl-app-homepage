import { Box, Flex} from "@chakra-ui/react";


const ProductSteps = () => {
  const Items = [
    {
      number: "1",
      title: "Integrate Once",
      description: "Connect to One Funnel's API (circle back to this)"
    },
    {
      number: "2",
      title: "Choose Your Services",
      description: "Activate payments, Messaging, KYC, or any combination you need."
    },
    {
      number: "3",
      title: "Go Live & Scale",
      description: "Monitor usage, performance and reporting in real time."
    }
  ];;
  return (
    <>
      <Flex
        className="items-container"
        flexDirection={{base: "column", md: "row"}}
        justifyContent="space-around"
        gap={10}
        mb={{ base: 2, md: 14 }}
        px={{ base: 6, md: 10 }}
      >
        {Items.map((Items, index) => (
          <Box key={index} className="step-item" textAlign="center" maxW="300px">
            <Box className="step-number"
             w="50px" 
             h="50px" 
             borderRadius="12px" 
             border="1px solid rgba(255, 255, 255, 0.2)" 
             display="flex" 
             alignItems="center" 
             justifyContent="center" 
             fontSize="25px" 
             fontWeight="600" 
             mx="auto" mb={10}
            >
              {Items.number}
            </Box>
            <Box fontSize="24px" fontWeight="600" mb={3}>{Items.title}</Box>
            <Box fontSize="16px" opacity={0.7} lineHeight="1.6">{Items.description}</Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default ProductSteps;