import { Box, Button, UnorderedList, ListItem, useBreakpointValue } from "@chakra-ui/react";
import { MERCHANT_APP_URL } from "@/utils/constants";
import { ArrowRight } from "iconsax-react";

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  buttonText: string;
}

export const FeatureTab: FeatureItem[] = [
  {
    id: "SMS & USSD",
    title: "Messaging Infrastructure (SMS & USSD)",
    subtitle: "Reach Customers Everywhere, Instantly",
    description:
      "Engage users through secure SMS and USSD channels with enterprise-grade reliability. Send real-time notifications, authentication codes, and service updates — and track delivery with full visibility.",
    features: [
      "Direct connectivity to major telcos",
      "Fast, high-delivery-rate messaging",
      "Real-time reporting and analytics",
      "Two-way USSD for interactive services",
    ],
    buttonText: "Start Messaging Smarter",
  },
  {
    id: "Airtime & Data",
    title: "Airtime & Data Distribution",
    subtitle: "Keep Your Users Connected Anytime, Anywhere",
    description:
      "Offer instant airtime top-ups and data bundle purchases across multiple networks. Perfect for banking apps, wallets, and digital platforms managing high-volume transactions.",
    features: [
      "Integration with all major network providers",
      "Real-time delivery and status tracking",
      "Bulk and automated processing",
      "Scalable to millions of daily transactions",
    ],
    buttonText: "Keep Your Users Connected",
  },
  {
    id: "Bill Payments",
    title: "Bill Payments",
    subtitle: "Simplify How Customers Pay Bills",
    description:
      "From electricity to TV, internet subscriptions, and more, manage multiple billers through a single API. Offer seamless, real-time payment experiences your users can trust.",
    features: [
      "Support for multiple billers and service types",
      "Real-time confirmation and reconciliation",
      "Bulk and recurring payments",
      "Transparent reconciliation and reporting",
    ],
    buttonText: "Integrate Bill Payments",
  },
  {
    id: "Payments & Transfers",
    title: "Payments & Transfers",
    subtitle: "Move Money Securely, Reliably, and in Real Time",
    description:
      "Process inflows, payouts, and fund transfers through one unified infrastructure. Built for banks, MFBs, Mobile Money Operators, Fintechs, and platforms that demand stability, speed and control.",
    features: [
      "Seamless inflows and payouts",
      "Real-time transaction monitoring and reconciliation",
      "Scalable APIs for complex transaction volumes",
      "Built-in fraud protection",
    ],
    buttonText: "Explore Payment Solutions",
  },
  {
    id: "KYC & Verification",
    title: "KYC & Verification",
    subtitle: "Verify Customers and Businesses in Seconds",
    description:
      "Onboard users faster with instant BVN & NIN verification. One Funnel connects to trusted data sources to help you stay compliant and prevent fraud.",
    features: [
      "BVN and NIN verification",
      "Real-time identity checks",
      "Automated workflows for faster onboarding",
      "Reliable uptime and secure data handling",
    ],
    buttonText: "Verify Instantly",
  },
];

export const ProductFeatureTab = ({ item }: { item: FeatureItem }) => {
  const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 });

  return (
    <Box color="white">
      <Box fontSize={{base: "20px", md: "35px"}} fontWeight="bold" mb="2">
        {item.title}
      </Box>
      <Box fontSize={{base: "14px", md: "18px"}} color="gray.300" mb="4">
        {item.subtitle}
      </Box>
      <Box fontSize={{base: "14px", md: "18px"}} mb="4">
        {item.description}
      </Box>
      <Box fontSize={{base: "14px", md: "18px"}} fontWeight="semibold" mb="2">
        Features:
      </Box>
      <UnorderedList spacing={2} fontSize={{base: "14px", md: "20px"}} mb={{base: 10, md: 20}}>
        {item.features.map((feature, index) => (
          <ListItem key={index}>{feature}</ListItem>
        ))}
      </UnorderedList>

      <Button
        my={{base: 4, md: 10}}
        bg="brand.primary700"
        border="1px solid #37376fff"
        color="white"
        _hover={{ bg: "brand.primary600" }}
        rounded="full"
        as="a"
        href={MERCHANT_APP_URL}
        target="_blank"
        size={{ base: "sm", md: "md", lg: "lg" }}
        px={{ base: 4, md: 6, lg: 8 }}
        py={{ base: 2, md: 3, lg: 4 }}
      >
        <Box marginRight="10px" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          {item.buttonText}
        </Box>
        <ArrowRight size={iconSize} variant="TwoTone" color="white" />
      </Button>

    </Box>
  );
};