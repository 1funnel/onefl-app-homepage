import { Box, Container } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import ProductHero from "@/components/Navbar/Product/product-hero";
import ProductTab from "@/components/Navbar/Product/product-features";
import ProductClientele from "@/components/Navbar/Product/product-clientele";
import ProductBenefits from "@/components/Navbar/Product/product-benefits";
import ProductTestimonials from "@/components/Navbar/Product/product-testimonials";
import ProductText from "@/components/Navbar/Product/product-text";
import ProductSteps from "@/components/Navbar/Product/product-steps";

const Products = () => {
  return (
    <Box className="product">
      <Box className="section hero-section dark-section">
        <Container>
          <ProductHero />
        </Container>
      </Box>

      <Box className="section focus-section dark-section">
        <Container>
          <ProductTab />
        </Container>
      </Box>

      <Box className="section product-clientele-section dark-section">
        <Container>
          <ProductClientele />
        </Container>
      </Box>

      <Box className="section product-steps-section dark-section-invert">
        <Container>
          <ProductSteps />
        </Container>
      </Box>

      <Box className="section documentation-section dark-section">
        <Container>
          <ProductBenefits/>
        </Container>
      </Box>

      <Box className="section testimonials-section dark-section-invert">
        <Container>
          <ProductTestimonials />
        </Container>
      </Box>

      <Box className="section product-clientele-section dark-section">
        <Container>
          <ProductText />
        </Container>
      </Box>
    </Box>
  );
};

export default Products;
