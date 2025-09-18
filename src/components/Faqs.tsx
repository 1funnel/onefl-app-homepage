import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { Add, Minus } from "iconsax-react";

const faqs = [
  {
    question: "How does One Funnel work?",
    answer:
      "One Funnel is a fintech platform that provides SMS, airtime, bank transfer, and data services to individuals and businesses.",
  },
  {
    question: "Is One Funnel free?",
    answer:
      "One Funnel offers a free trial period, after which users can subscribe to our services at a competitive rate.",
  },
  {
    question: "What services does One Funnel offer?",
    answer:
      "One Funnel offers SMS, airtime, bank transfer, and data services to individuals and businesses.",
  },
  {
    question: "How does One Funnel's bank transfer service work?",
    answer:
      "One Funnel's bank transfer service allows users to transfer money between different banks and financial institutions in Nigeria.",
  },
  {
    question: "What is the purpose of One Funnel's data service?",
    answer:
      "One Funnel's data service allows users to buy and sell data bundles at a competitive rate.",
  },
  {
    question: "How does One Funnel's SMS service work?",
    answer:
      "One Funnel's SMS service allows users to send and receive SMS messages at a competitive rate.",
  },
  {
    question: "How does One Funnel's airtime service work?",
    answer:
      "One Funnel's airtime service allows users to buy and sell airtime at a competitive rate.",
  },
];

const Faqs = () => {
  return (
    <Box className="faqs">
      <Box className="app-title" marginBottom="50px">
        Got Questions? <br />
        We’ve Got Answers.
      </Box>

      <Accordion>
        {faqs.map((faq, index) => {
          const sn = `0${index + 1}`;

          return (
            <AccordionItem className="faq-item" key={index}>
              {({ isExpanded }) => (
                <>
                  <Box className="faq-header">
                    <Box className="sn">{sn}</Box>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="faq-question"
                      >
                        {faq.question}
                      </Box>
                      <AccordionIcon as={isExpanded ? Minus : Add} />
                    </AccordionButton>
                  </Box>

                  <Box className="faq-body">
                    <AccordionPanel pb={4} className="faq-answer">
                      {faq.answer}
                    </AccordionPanel>
                  </Box>
                </>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default Faqs;
