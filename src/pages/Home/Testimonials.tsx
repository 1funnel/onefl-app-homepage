import TestimonialCard from "@/components/TestimonialCard";
import { Box } from "@chakra-ui/react";

const testimonials = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    feedback:
      "This tool has revolutionized our workflow, saving us hours of time. The intuitive interface and top-notch customer support have made it a cornerstone of our operations.",
    avatar: "https://img.freepik.com/free-photo/close-up-upset-american-black-person_23-2148749582.jpg",
    bio: {
      name: "Marcus Reed",
      designation: "Senior Product Manager",
    },
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    feedback:
      "Reliable, high-performance, and easy to integrate. The UX is well thought out and features feel polished. This has exceeded our expectations and become an essential tool for our team.",
    avatar: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    bio: {
      name: "Tasha Nguyen",
      designation: "Head of Customer Success",
    },
  },
  // {
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
  //   feedback:
  //     "I was initially skeptical because we’ve tried many similar products before, but this one impressed me at every turn. The onboarding process was smooth and well-guided, the documentation is thorough, and whenever we had questions the support team was patient and insightful. It’s very clear they’ve designed this with real users in mind. Performance is consistent, updates are regular, and there are no nasty surprises. Definitely worth every cent.",
  //   avatar: "https://randomuser.me/api/portraits/men/63.jpg",
  //   bio: {
  //     name: "Joshua Patel",
  //     designation: "Engineering Lead",
  //   },
  // },
  // {
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
  //   feedback:
  //     "What impressed me most was how adaptable and scalable this solution is. As our requirements grew—from a small team project to multiple departments—it scaled without breaking a sweat. Features we didn’t even need at first became critical later, and they were already there, polished and ready. Add to that the excellent support and the regular improvements driven by user feedback, and you have something that doesn’t just solve problems now—it anticipates future ones.",
  //   avatar: "https://randomuser.me/api/portraits/women/70.jpg",
  //   bio: {
  //     name: "Latoya Simmons",
  //     designation: "Director of Operations",
  //   },
  // },
  // {
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
  //   feedback:
  //     "Using this service has been a game-changer for our customer interactions. Response times have improved, errors have dropped, and customers often comment on how smooth everything feels. The analytics dashboard gives insights we didn’t have before, allowing us to make data-driven decisions to refine our workflows. And whenever we hit a snag, their team went above and beyond. Definitely a high-quality product that adds real value.",
  //   avatar: "https://randomuser.me/api/portraits/men/88.jpg",
  //   bio: {
  //     name: "Cameron Davis",
  //     designation: "Customer Experience Specialist",
  //   },
  // },
];
const Testimonials = () => {
  return (
    <Box className="testimonials">
      <Box className="special-highlight-title">Testimonials</Box>

      <Box className="app-title gradient-title" marginBottom="10px">
        Hear what <br />
        our clients say
      </Box>

      <Box className="testimonial-slides">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
