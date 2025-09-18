import ProductCard from "@/components/ProductCard";
import { Box } from "@chakra-ui/react";
import { Bank, Messages, Mobile, Receipt1, SecurityUser } from "iconsax-react";
import Carousel from "react-multi-carousel";

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, 
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, 
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, 
    partialVisibilityGutter: 30
  },
};

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

      <Box className="product-briefs" gap="40px">
        <Carousel responsive={responsive} partialVisible arrows={false}>
          {productsBrief.map((product) => {
            return <ProductCard product={product} key={product.title} />;
          })}
        </Carousel>
      </Box>
    </Box>
  );
};

export default ProductIntro;
