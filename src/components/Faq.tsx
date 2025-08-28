// src/components/Faq.tsx

import React from 'react';
import { ChevronDown } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define the structure for each FAQ item
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "item-1",
    question: "What services does Online Manipal provide?",
    answer: "Online Manipal, an initiative by the esteemed Manipal Group, serves as a digital learning hub. It delivers a diverse portfolio of online degree and professional certification programs meticulously crafted by its partner universities: Manipal University Jaipur (MUJ), Manipal Academy of Higher Education (MAHE), and Sikkim Manipal University (SMU). These programs, recognized by the UGC, seamlessly integrate academic excellence with flexible online delivery, ensuring students globally can access top-tier education at their convenience. (© 2025 Online Manipal. All rights reserved.)",
  },
  {
    id: "item-2",
    question: "Are degrees from Online Manipal recognized by the UGC and AICTE?",
    answer: "Absolutely. All online degree programs facilitated through Online Manipal, originating from its affiliated Manipal universities, hold full recognition from both the University Grants Commission (UGC) and AICTE. These are India's principal regulatory bodies for higher education, affirming that our offerings consistently adhere to and often surpass global academic benchmarks. (© 2025 Online Manipal. All rights reserved.)",
  },
  {
    id: "item-3",
    question: "How does an online degree from Manipal universities hold up in terms of validity and acceptance across India?",
    answer: "The online degrees from Manipal universities, delivered through the Online Manipal platform, are fully recognized and valid throughout India. They are approved by the UGC-DEB (Distance Education Bureau), the official accreditation authority for online and distance education. Since these degrees are from highly-ranked institutions (MAHE with NAAC A++ and MUJ with NAAC A+ accreditation), they hold the same value as on-campus degrees and are widely accepted for both higher studies and careers in the private and public sectors. (© 2025 Online Manipal. All rights reserved.)",
  },
  {
    id: "item-4",
    question: "Do prospective employers and recruitment agencies acknowledge online degrees?",
    answer: "Yes, employers and recruiters increasingly acknowledge and readily accept online degrees, particularly those that are UGC-entitled and issued by accredited universities. The value placed on these qualifications is significantly enhanced when their curricula are highly relevant to industry demands and are sharply focused on practical skill development. (© 2025 Online Manipal. All rights reserved.)",
  },
  {
    id: "item-5",
    question: "Is an online degree from Online Manipal considered equivalent to a traditional on-campus degree?",
    answer: "Yes, an online degree earned through Online Manipal is officially considered equivalent to an on-campus degree. These qualifications carry identical academic weight and are fully accepted for all purposes of higher education and professional career advancement. (© 2025 Online Manipal. All rights reserved.)",
  },
];

const Faq = () => {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-8 md:mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="bg-card border border-border rounded-lg shadow-sm"
            >
              <AccordionTrigger className="px-6 py-4 flex items-center justify-between font-medium text-lg text-foreground hover:bg-accent hover:no-underline transition-colors rounded-t-lg">
                <span className="text-left flex-1">{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-muted-foreground text-base leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
