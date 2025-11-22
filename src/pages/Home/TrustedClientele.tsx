import { Box, Flex, Image } from "@chakra-ui/react";
import MTN from "@/assets/images/clientele/mtn.svg";
import Airtel from "@/assets/images/clientele/airtel.svg";
import Glo from "@/assets/images/clientele/glo.svg";

const TrustedClientele = () => {
  const clientelleList = [MTN, Airtel, Glo];
  return (
    <>
      <Box className="trusted-by">
        <Box className="content" >
          <span className="content-header"> Trusted by leading financial institutions in Africa</span>
          <br />The guarantee for a smooth end-to-end experience, 
          seamless integration, streamlined operations, uninterrupted uptime, and a rail for growth and scale.

        </Box>
      </Box>
      <Flex className="clientele-list" align="center" justifyContent="space-around">
        {clientelleList.map((Logo, index) => (
          <Box key={index} className="clientele-logo">
            <Image
              src={Logo}
              alt={`Logo ${index + 1}`}
              className="logo"
              height={{base:"30px", md: "50px"}}
            />
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default TrustedClientele;