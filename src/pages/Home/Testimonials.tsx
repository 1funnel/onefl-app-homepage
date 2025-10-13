import TestimonialCard from "@/components/TestimonialCard";
import { Box, Button, Flex } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "iconsax-react";

const testimonials = [
  {
    logo: "Fetti Technologies",
    feedback:
      "This tool has revolutionized our workflow, saving us hours of time. The intuitive interface and top-notch customer support have made it a cornerstone of our operations.",
    avatar:
      "https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg",
    bio: {
      name: "Samuel Osagie",
      designation: "Senior Product Manager",
    },
  },
  {
    logo: "Nova Systems",
    feedback:
      "Reliable, high-performance, and easy to integrate. The UX is well thought out and features feel polished. This has exceeded our expectations and become an essential tool for our team.",
    avatar:
      "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: {
      name: "Ibukun Olayiwola",
      designation: "Head of Customer Success",
    },
  },
  {
    logo: "ZyraSoft Labs",
    feedback:
      "Impressed by the smooth onboarding, thorough docs, and patient support. Performance is consistent, updates are regular, and no nasty surprises. Worth every cent.",
    avatar: "https://randomuser.me/api/portraits/men/63.jpg",
    bio: {
      name: "Michael Okafor",
      designation: "Engineering Lead",
    },
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
};

const Testimonials = () => {
  const carouselRef = useRef<any>(null);

  return (
    <Box className="testimonials">
      <Box className="special-highlight-title">Testimonials</Box>

      <Box className="app-title gradient-title" marginBottom="10px">
        Hear what <br />
        our clients say
      </Box>

      <Box className="testimonial-slides">
        <Carousel ref={carouselRef} responsive={responsive} partialVisible arrows={false} infinite={false}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Carousel>
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
            _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
            _active={{ bg: "whiteAlpha.300" }}
            _focus={{ boxShadow: "none" }}
            height="auto"
            border="1px solid white"
            padding="5px"
          >
            <ArrowLeft size={28} variant="TwoTone" color="white" />
          </Button>
      
          <Button
            onClick={() => carouselRef.current?.next()}
            bg="transparent"
            p={0}
            colorScheme="none" 
            _hover={{ bg: "whiteAlpha.200", borderColor: "white" }}
            _active={{ bg: "whiteAlpha.300" }}
            _focus={{ boxShadow: "none" }}
            height="auto"
            border="1px solid white"
            padding="5px"
          >
            <ArrowRight size={28} variant="TwoTone" color="white" />
          </Button>
        </Flex>
    </Box>
  );
};

export default Testimonials;
