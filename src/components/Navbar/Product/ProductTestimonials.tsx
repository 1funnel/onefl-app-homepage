import ProductTestimonialCard from "@/components/ProductTestimonialCard";
import { Box, Button, Flex } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "iconsax-react";


const testimonials = [
  {
    number: "1",
    title: "Banks & Fintechs"
  },
   {
    number: "2",
    title: "Microfinance Institutions"
  },
   {
    number: "3",
    title: "Payment Aggregators"
  },
   {
    number: "4",
    title: "Telecom Operators"
  },
   {
    number: "5",
    title: "E-commerce Platforms"
  },
   {
    number: "6",
    title: "Digital Service Providers"
  },
  
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
  laptop: {
    breakpoint: { max: 1200, min: 992 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 992, min: 600 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
    
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
};

const ProductTestimonials = () => {
  const carouselRef = useRef<any>(null);

  return (
    
    <Box className="testimonials">
      <Box className="gradient-title"fontSize={{base: 20, md: 30, lg: 40}} fontWeight="bold">
        Who We {" "}
        <span className="special-highlight">Power</span>
      </Box>

      <Box className="testimonial-slides" width="100%" overflow="hidden">
        <Carousel ref={carouselRef} responsive={responsive} partialVisible arrows={false} infinite={false}>
          {testimonials.map((testimonial, index) => (
            <ProductTestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Carousel>
      </Box>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt={6}
          mb={20}
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

export default ProductTestimonials;
