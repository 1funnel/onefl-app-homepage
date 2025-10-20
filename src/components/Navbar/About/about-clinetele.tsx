import { Box, Flex, Image } from "@chakra-ui/react";
import MTN from "@/assets/images/clientele/mtn.svg";
import Airtel from "@/assets/images/clientele/airtel.svg";
import Glo from "@/assets/images/clientele/glo.svg";

const AboutClientele = () => {
  const clientelleList = [MTN, Airtel, Glo];
  return (
    <>
      <Box className="trusted-by">
        <Box className="content">
          <Box className="content-header">Trusted by Leading Financial Institutions and Technology Partners Across Africa. </Box>
          <Box mt={2}>From banks to microfinance institutions and fast-growing fintech startups,
          OneFunnel provides the infrastructure trusted to power seamless transactions,
          real-time verification, and essential digital services</Box>
        </Box>
      </Box>
      <Flex className="clientele-list" align="center" justifyContent="space-around">
        {clientelleList.map((Logo, index) => (
          <Box key={index} className="clientele-logo">
            <Image
              src={Logo}
              alt={`Logo ${index + 1}`}
              className="logo"
              height="50px"
            />
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default AboutClientele;