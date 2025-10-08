import FeatureTab from "@/components/FeatureTab";
import { Box } from "@chakra-ui/react";
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
    cta: "Pay a Bill",
    image: "/images/integrations/bills.png",
  },
  {
    title: "Simplify Operations",
    description:
      "Manage multiple services from one platform.",
    cta: "Send Money",
    image: "/images/integrations/bank-transfer.png",
  },
  {
    title: "99.9% Uptime",
    description:
      "Reliable network uptime and APIs built for scale and performance.",
    cta: "Enable Messaging",
    image: "/images/integrations/sms.png",
  },
];

const FeatureTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box className="feature-tabs">
      <Box className="gradient-title" width={{ base: "100%", sm: "40%" }}>
        <p>Why Choose One Funnel?</p>
        <Box className="content-header" >
          Designed to Support Business Growth and Scale       
        </Box>
      </Box>

      

      <Box className="tabs-wrapper">
        {tabs.map((tab, index) => (
          <FeatureTab
            tab={{...tab, title: `• ${tab.title}`}}
            key={tab.title}
            tabIndex={index}
            selected={index === selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FeatureTabs;
