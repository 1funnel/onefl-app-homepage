import { Box, Spacer } from "@chakra-ui/react";
import type { Icon } from "iconsax-react";

interface Props {
  product: { title: string; description: string; icon: Icon };
}

const ProductCard = (props: Props) => {
  const { product } = props;
  const IconComponent = product.icon;

  return (
    <Box className="product-item">
      <Box>
        <IconComponent
          size={60}
          variant="Bulk"
          color="var(--one-fl-colors-brand-primary700)"
        />
      </Box>
      <Spacer />
      <Box className="title">{product.title}</Box>

      <Box className="description">{product.description}</Box>
    </Box>
  );
};

export default ProductCard;
