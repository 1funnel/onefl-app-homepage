import FeatureTab from "@/components/FeatureTab";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const tabs = [
  {
    title: "Stay Connected Instantly",
    description:
      "Top up airtime and data bundles across all networks in just a few taps — keeping your users online whenever they need it most.",
    cta: "Recharge Now",
    image: "/images/integrations/airtime.png",
  },
  {
    title: "Simplify Everyday Bills",
    description:
      "From electricity to cable TV, empower your users to pay all their household and lifestyle bills in one place, stress-free.",
    cta: "Pay a Bill",
    image: "/images/integrations/bills.png",
  },
  {
    title: "Move Money with Confidence",
    description:
      "Enable smooth, secure bank transfers that settle instantly, so your users never have to worry about delays.",
    cta: "Send Money",
    image: "/images/integrations/bank-transfer.png",
  },
  {
    title: "Communicate Without Barriers",
    description:
      "Integrate SMS and messaging services to deliver alerts, confirmations, and updates that keep users informed in real-time.",
    cta: "Enable Messaging",
    image: "/images/integrations/sms.png",
  },
];

const FeatureTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box className="feature-tabs">
      <Box className="gradient-title" width={{ base: "100%", sm: "40%" }}>
        One platform to connect to all of your users' external apps
      </Box>

      <Box className="tabs-wrapper">
        {tabs.map((tab, index) => (
          <FeatureTab
            tab={tab}
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
