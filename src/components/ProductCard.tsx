import { Box, Spacer, useBreakpointValue } from "@chakra-ui/react";
import type { Icon } from "iconsax-react";

interface Props {
  product: { title: string; description: string; icon: Icon };
}

const ProductCard = (props: Props) => {
  const { product } = props;
  const IconComponent = product.icon;
  const iconSize = useBreakpointValue({ base: 45, md: 50, lg: 60 }) ?? 50;


  return (
    <Box className="product-item">
      <Box>
        <IconComponent
          size={iconSize}
          variant="Bulk"
          color="var(--one-fl-colors-brand-primary700)"
        />
      </Box>
      <Spacer />
      <Box className="title"  fontSize={{ base: "md", md: "lg", lg: "xl" }} font-weight="bold">{product.title}</Box>

      <Box className="description" fontSize={{ base: "sm", md: "md", lg: "lg" }}>{product.description}</Box>
    </Box>
  );
};

export default ProductCard;
