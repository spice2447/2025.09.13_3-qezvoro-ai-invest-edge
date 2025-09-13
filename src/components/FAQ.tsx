'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is my investment safe?",
    answer: "Yes, we use state-of-the-art security measures to protect your assets."
  },
  {
    question: "What is the minimum investment?",
    answer: "The minimum investment for the Pro plan is $1,000."
  },
  {
    question: "How can I withdraw my funds?",
    answer: "You can withdraw your funds at any time through the dashboard."
  }
];

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
