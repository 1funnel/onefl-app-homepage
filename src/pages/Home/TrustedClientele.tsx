import { Box, Flex, Image } from "@chakra-ui/react";
import MTN from "@/assets/images/clientele/mtn.svg";
import Airtel from "@/assets/images/clientele/airtel.svg";
import Glo from "@/assets/images/clientele/glo.svg";
// import 9mobile from "@/assets/images/clientele/9mobile.svg";

const TrustedClientele = () => {
  const clientelleList = [MTN, Airtel, Glo];
  return (
    <>
      <Box className="trusted-by">
        <Box className="content">
          Trusted by leading B2B <br /> SaaS engineering teams globally
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

export default TrustedClientele;
