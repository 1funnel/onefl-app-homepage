import { MERCHANT_APP_URL } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import type { Dispatch } from "react";
import GetStartedBtn from "./GetStartedBtn";
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
}

const FeatureTab = (props: Props) => {
  const { tab, selected, tabIndex, setSelectedIndex } = props;

  const handleClick = () => {
    setSelectedIndex(tabIndex);
  };

  return (
    <Box
      className={`featured-tab ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <Flex>
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="20px">
          <GridItem className="content">
            <Box className="title">{tab.title}</Box>
            {selected && (
              <>
                <Box className="description">{tab.description}</Box>

                <Spacer />
                <Button as="a" href={MERCHANT_APP_URL} className="cta">
                  {tab.cta}

                  <ArrowRight size={20} variant="TwoTone" color="white" />
                </Button>
              </>
            )}
          </GridItem>

          {selected && (
            <GridItem className="featured-image">
              <Image
                src="/images/hero-img.svg"
                alt={`${tab.title} image`}
                height="250px"
              />
            </GridItem>
          )}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default FeatureTab;
