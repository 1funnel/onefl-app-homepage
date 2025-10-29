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
    question: "How does OneFunnel work?",
    answer:
      "OneFunnel is a fintech platform that provides SMS, airtime, bank transfer, and data services to individuals and businesses.",
  },
  {
    question: "Is OneFunnel free?",
    answer:
      "OneFunnel offers a free trial period, after which users can subscribe to our services at a competitive rate.",
  },
  {
    question: "What services does OneFunnel offer?",
    answer:
      "OneFunnel offers SMS, airtime, bank transfer, and data services to individuals and businesses.",
  },
  {
    question: "How does OneFunnel's bank transfer service work?",
    answer:
      "OneFunnel's bank transfer service allows users to transfer money between different banks and financial institutions in Nigeria.",
  },
  {
    question: "What is the purpose of OneFunnel's data service?",
    answer:
      "OneFunnel's data service allows users to buy and sell data bundles at a competitive rate.",
  },
  {
    question: "How does OneFunnel's SMS service work?",
    answer:
      "OneFunnel's SMS service allows users to send and receive SMS messages at a competitive rate.",
  },
  {
    question: "How does OneFunnel's airtime service work?",
    answer:
      "OneFunnel's airtime service allows users to buy and sell airtime at a competitive rate.",
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
