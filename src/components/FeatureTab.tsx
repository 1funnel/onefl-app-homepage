import { Box, Button } from "@chakra-ui/react";
import type { Dispatch } from "react";
import { MERCHANT_APP_URL } from "@/utils/constants";
import { ArrowRight } from "iconsax-react";

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
    >
      {showCta && (
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

      <Box className="content">
        <Box className="title" cursor="pointer" onClick={handleClick}>{tab.title}</Box>
        {selected && (
          <Box className="description">{tab.description}</Box>
        )}
      </Box>
    </Box>
  );
};

export default FeatureTab;