import { Box, GridItem, Image, SimpleGrid, UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import GetStartedBtn from "@/components/GetStartedBtn";
import { motion } from "framer-motion";

const MotionGridItem = motion(GridItem);

const benefitItems= [
  {
    title: "One Integration, Many Services",
    description:
      "No juggling multiple vendors.",
  },
  {
    title: "Reliability & Uptime",
    description:
      "99.9% uptime with bank-level security.",
  },
  {
    title: "Speed to Market",
    description:
      "Reduce time spent integrating with multiple systems.",
  },
  {
    title: "Unified Reporting & Analytics",
    description:
      "Get valuable insights across every service.",
  },
  {
    title: "Scalable & Modular",
    description:
      "Expand at your own pace.",
  },
]  


const ProductBenefits = () => {;
  return (
    <Box className="documentation-card">
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <MotionGridItem
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box className="brief">
            <Box className=" gradient-text" mt={2} mb={8} fontSize={{base: 25, md: 30, lg: 35}} fontWeight="bold">
              Why Choose <br/>
              <Box as="span" className="special-highlight">OneFunnel ?</Box>
            </Box>

            <Box className=" gradient-text" fontSize={{base: 17, lg: 20}} mb={2} fontWeight="bold">
               Infrastructure That Scales With You 
            </Box>

            <Box className=" gradient-text">
              A platform built for reliability,  flexibility, and performance so you can focus on GROWTH, not integrations. 
            </Box>

            <UnorderedList spacing={3} fontSize="16px" mb={{ base: 10, md: 20 }} pl={2}>
              {benefitItems.map((benefit, index) => (
                <ListItem key={index}>
                  <Flex align="flex-start" flexDirection={{ base: "column", lg: "row" }} mt={6}>
                    <Box mr={2} fontWeight="semibold">
                      {benefit.title}
                    </Box>
                    <Box flex="1">
                      — {benefit.description}
                    </Box>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
            
            <GetStartedBtn />

          </Box>
        </MotionGridItem>
        <MotionGridItem
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut"}}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box className="content">
            <Image
              src="/images/about-hero.svg"
              alt="Documentation Image"
              width="100%"
              mt={{base: 4, md: 16}}
            />
          </Box>
        </MotionGridItem>
      </SimpleGrid>
    </Box>
  );
};

export default ProductBenefits;
