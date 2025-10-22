import { Box } from "@chakra-ui/react";

interface Props {
  testimonial: {
    number: string;
    title: string;
  };
}

const ProductTestimonialCard = (props: Props) => {
  const { testimonial } = props;

  return (
    <Box className="product-testimonial-card">
      <Box className="title" fontWeight="bold"
        w="50px" 
        h="50px" 
        borderRadius="50%" 
        border="1px solid rgba(255, 255, 255, 0.2)" 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        fontSize="18px"
        p={2}  
      >
        {testimonial.number}
      </Box>
      <Box className="feedback" fontWeight="bold" alignSelf="flex-start">{testimonial.title}</Box>
    </Box>
  );
};

export default ProductTestimonialCard;
