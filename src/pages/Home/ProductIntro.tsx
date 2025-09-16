import ProductCard from "@/components/ProductCard";
import { Box, Flex } from "@chakra-ui/react";
import { Bank, Messages, Mobile, Receipt1, SecurityUser } from "iconsax-react";

const productsBrief = [
  {
    title: "Airtime & Data",
    description:
      "Easily buy and distribute bulk airtime and data at a low cost.",
    icon: Mobile,
  },
  {
    title: "SMS/USSD",
    description: "Boost engagement with our SMS or USSD service.",
    icon: Messages,
  },
  {
    title: "KYC Verification",
    description: "Verify customer identity in seconds with our robust service.",
    icon: SecurityUser,
  },
  {
    title: "Bank Transfer",
    description:
      "Easily integrate with all banks and Financial institutions in Nigeria.",
    icon: Bank,
  },
  {
    title: "Bill Payment",
    description: "Consolidate your bill payment processes under one roof.",
    icon: Receipt1,
  },
];

const ProductIntro = () => {
  return (
    <Box className="product-intro">
      <Box className="context">
        <Box className="app-title" marginBottom="10px">
          One Platform,
          <br /> Endless,{" "}
          <Box as="span" className="special-highlight">
            Possibilities
          </Box>
        </Box>

        <Box width={{ base: "100%", sm: "40%" }}>
          One Funnel aggregates essential services for banks and fintech
          companies, streamlining operations and enhancingcustomer experience.
        </Box>
      </Box>

      <Flex className="product-briefs" gap="40px">
        {productsBrief.map((product) => {
          return <ProductCard product={product} key={product.title} />;
        })}
      </Flex>
    </Box>
  );
};

export default ProductIntro;
