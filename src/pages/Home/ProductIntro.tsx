import ProductCard from "@/components/ProductCard";
import { Box, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Bank, Messages, Mobile, Receipt1, SecurityUser, ArrowRight, ArrowLeft } from "iconsax-react";
import Carousel from "react-multi-carousel";
import { DOCUMENTATION_URL } from "@/utils/constants";
import { useRef } from "react";


const productsBrief = [
  {
    title: "Airtime & Data",
    description:
      "Deliver instantly across all networks.",
    icon: Mobile,
  },
  {
    title: "SMS/USSD",
    description: "Uninterrupted communication with customers in real time.",
    icon: Messages,
  },
  {
    title: "KYC Verification",
    description: "Validate BVN, NIN, and user identities instantly.",
    icon: SecurityUser,
  },
  {
    title: "Unified Dashboard",
    description:
      "Manage, monitor and analyze services from one dashboard.",
    icon: Bank,
  },
  {
    title: "Bill Payments",
    description: "Easy access to all service providers.",
    icon: Receipt1,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, 
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, 
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
  const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 });
  const carouselRef = useRef<any>(null);


  return (
    <Box className="product-intro">
      <Box className="context">
        <Box className="app-title" marginBottom="20px">
          One Integration,
          <br /> Multiple{" "}
          <Box as="span" className="special-highlight">
            Services
          </Box>
        </Box>

        <Box width={{ base: "100%", sm: "40%" }}>
          One Funnel is a unified fintech infrastructure that connects your business to multiple services via a single integration.
           Optimize your backend with our simplified stack for growth and scale,  innovation, and impeccable service to your customers.
        </Box>

        <Button
          my={10}
          bg="brand.primary700"
          color="white"
          _hover={{ bg: "brand.primary600" }}
          rounded="full"
          as="a"
          href={DOCUMENTATION_URL}
          target="_blank"
          size={{ base: "sm", md: "md", lg: "lg" }}
          px={{ base: 4, md: 6, lg: 8 }}
          py={{ base: 2, md: 3, lg: 4 }}
        >
          <Box marginRight="10px" fontSize={{ base: "sm", md: "md", lg: "lg" }}>Explore our APIs now</Box>
          <ArrowRight size={iconSize} variant="TwoTone" color="white" />
        </Button>
      </Box>

      <Box>
        <Box className="app-title" margin="30px 0">
          One Platform,
          <br /> Zero{" "}
          <Box as="span" className="special-highlight">
            Complexities
          </Box>
        </Box>
        <Box className="product-briefs" gap="40px">
          <Carousel ref={carouselRef} responsive={responsive} partialVisible arrows={false} infinite={false}>
            {productsBrief.map((product) => {
              return <ProductCard product={product} key={product.title} />;
            })}
          </Carousel>
        </Box>
      </Box>

      <Flex
       justifyContent="space-between"
        alignItems="center"
        mt={6}
        px={{ base: 2, md: 4, lg: 6 }}
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <Button
          onClick={() => carouselRef.current?.previous()}
          bg="transparent"
          colorScheme="none" 
          _hover={{ bg: "#17172fff", borderColor: "white" }}
          _active={{ bg: "whiteAlpha.300" }}
          _focus={{ boxShadow: "none" }}
          height="auto"
          border="1px solid #37376fff"
          padding="5px"
          rounded="full"
        >
          <ArrowLeft size={28} variant="TwoTone" color="white" />
        </Button>

        <Button
          onClick={() => carouselRef.current?.next()}
          bg="transparent"
          p={0}
          colorScheme="none" 
          _hover={{ bg: "#17172fff", borderColor: "white" }}
          _active={{ bg: "whiteAlpha.300" }}
          _focus={{ boxShadow: "none" }}
          height="auto"
          border="1px solid #37376fff"
          padding="5px"
          rounded="full"
        >
          <ArrowRight size={28} variant="TwoTone" color="white" />
        </Button>
      </Flex>
   </Box>  
 
  );
};

export default ProductIntro;
