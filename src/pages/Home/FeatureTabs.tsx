import FeatureTab from "@/components/FeatureTab";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

const tabs = [
  {
    title: "Launch Faster",
    description:
      "Seamless integration with resource support .",
    cta: "Start Now",
    image: "/images/integrations/airtime.png",
  },
  {
    title: "Save Costs",
    description:
      "Consolidate every service with  One Integration.",
    cta: "Start Now",
    image: "/images/integrations/bills.png",
  },
  {
    title: "Simplify Operations",
    description:
      "Manage multiple services from one platform.",
    cta: "Start Now",
    image: "/images/integrations/bank-transfer.png",
  },
  {
    title: "99.9% Uptime",
    description:
      "Reliable network uptime and APIs built for scale and performance.",
    cta: "Start Now",
    image: "/images/integrations/sms.png",
  },
];

const FeatureTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  
  // check to see if it's a large screen
  const isLargeScreen = useBreakpointValue({ base: false, xl: true });
  
  // hover on large screen and select on small screen
  const activeIndex = isLargeScreen ? hoveredIndex : selectedIndex;

  const handleClick = (index: number) => {
    if (!isLargeScreen) {
      setSelectedIndex(selectedIndex === index ? -1 : index);
    }
  };

  const handleHover = (index: number) => {
    if (isLargeScreen) {
      setHoveredIndex(index);
    }
  };

  const handleHoverLeave = () => {
    if (isLargeScreen) {
      setHoveredIndex(-1);
    }
  };

  return (
    <Box className="feature-tabs">
      <Box className="gradient-title" width={{ base: "100%", sm: "40%" }}>
        <p>Why Choose OneFunnel?</p>
        <Box className="content-header" >
          Designed to Support Business Growth and Scale       
        </Box>
      </Box>

      <Box display="flex" gap={6} alignItems="flex-start">
        <Box className="tabs-container" flex="1">
          <Box className="tabs-wrapper">
            {tabs.map((tab, index) => (
              <Box
                key={tab.title}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverLeave}
                onClick={() => handleClick(index)}
              >
                <FeatureTab
                  tab={{...tab, title: `• ${tab.title}`}}
                  tabIndex={index}
                  selected={activeIndex === index} 
                  setSelectedIndex={setSelectedIndex}
                  showCta={index === 0}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="shared-image" flex="1">
          <Image
            src="/images/about-hero.svg"
            height="350px"
            objectFit="contain"
            transform={activeIndex >= 0 ? `translateY(${activeIndex * 20}px)` : "translateY(0)"}
            transition="transform 0.3s ease-in-out"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureTabs;