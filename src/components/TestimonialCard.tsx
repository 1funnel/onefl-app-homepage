import { Box, Image } from "@chakra-ui/react";

interface Props {
  testimonial: {
    logo: string;
    feedback: string;
    avatar: string;
    bio: {
      name: string;
      designation: string;
    };
  };
}

const TestimonialCard = (props: Props) => {
  const { testimonial } = props;

  return (
    <Box className="testimonial-card">
      <Box className="logo">
        <Image src={testimonial.logo} height="40px" alt="Logo" />
      </Box>
      <Box className="feedback">{testimonial.feedback}</Box>
      <Box className="bio-profile">
        <Box className="avatar">
          <Image
            src={testimonial.avatar}
            alt="avatar"
            height="50px"
            width="50px"
            objectFit="cover"
            objectPosition="center"
            rounded="full"
          />
        </Box>
        <Box className="bio-brief">
          <Box className="name">{testimonial.bio.name}</Box>
          <Box className="designation">{testimonial.bio.designation}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
