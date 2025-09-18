import TestimonialCard from "@/components/TestimonialCard";
import { Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";

const testimonials = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    feedback:
      "This tool has revolutionized our workflow, saving us hours of time. The intuitive interface and top-notch customer support have made it a cornerstone of our operations.",
    avatar:
      "https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg",
    bio: {
      name: "Marcus Reed",
      designation: "Senior Product Manager",
    },
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    feedback:
      "Reliable, high-performance, and easy to integrate. The UX is well thought out and features feel polished. This has exceeded our expectations and become an essential tool for our team.",
    avatar:
      "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: {
      name: "Tasha Nguyen",
      designation: "Head of Customer Success",
    },
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    feedback:
      "Impressed by the smooth onboarding, thorough docs, and patient support. Performance is consistent, updates are regular, and no nasty surprises. Worth every cent.",
    avatar: "https://randomuser.me/api/portraits/men/63.jpg",
    bio: {
      name: "Joshua Patel",
      designation: "Engineering Lead",
    },
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    feedback:
      "Scalability and adaptability are key strengths. Features we didn’t initially need became essential later, and they were already polished and ready. The support team is responsive and regularly improves the product based on user feedback.",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
    bio: {
      name: "Latoya Simmons",
      designation: "Director of Operations",
    },
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    feedback:
      "Game-changer for customer interactions. Response times improved, errors dropped, and customers comment on the smooth experience. The analytics dashboard provides valuable insights, and the support team is always willing to help.",
    avatar:
      "https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg",
    bio: {
      name: "Cameron Davis",
      designation: "Customer Experience Specialist",
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
  return (
    <Box className="testimonials">
      <Box className="special-highlight-title">Testimonials</Box>

      <Box className="app-title gradient-title" marginBottom="10px">
        Hear what <br />
        our clients say
      </Box>

      <Box className="testimonial-slides">
        <Carousel responsive={responsive} partialVisible arrows={false}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testimonials;
