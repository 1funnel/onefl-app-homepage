import {
  Box,
  Button,
  Image,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import type { Dispatch } from "react";
import { MERCHANT_APP_URL } from "@/utils/constants";
import { ArrowRight } from "iconsax-react";
// import type { ReactNode } from "react";

type Tab = {
  title: string;
  description: string;
  cta: string;
  image: string;
};

interface Props {
  tab: Tab;
  selected: boolean;
  setSelectedIndex: Dispatch<React.SetStateAction<number>>;
  tabIndex: number;
  showCta?: boolean;
}

const FeatureTab = (props: Props) => {
  const { tab, selected, tabIndex, setSelectedIndex, showCta } = props;

  const handleClick = () => {
    setSelectedIndex(tabIndex);
  };

  return (
    <Box
      className={`featured-tab ${selected ? "selected" : ""}`}
      onClick={handleClick}
      
    >
      {showCta && selected && (
        <Button
          as="a"
          href={MERCHANT_APP_URL}
          className="cta"
          mt={10}          
        >
          {tab.cta}
          <ArrowRight size={20} variant="TwoTone" color="white" />
        </Button>
      )}

      <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
        <GridItem className="content">
          <Box className="title">{tab.title}</Box>
          {selected && (
            <Box className="description">{tab.description}</Box>
          )}
        </GridItem>

        {selected && (
          <GridItem 
            className="featured-image">
            <Image
              src="/images/hero-img.svg"
              alt={`${tab.title} image`}
              height="250px"
            />
          </GridItem>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default FeatureTab;
