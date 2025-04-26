"use client";

type AccordionProps = {
  items: Array<{
    question: string;
    answer: string;
  }>;
};

const Accordion = ({ items }: AccordionProps) => {
  return (
    <div className="divide-y rounded-md border">
      {items.map((item, i: number) => (
        <details key={i} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white font-medium">
            <h3 className="text-lg font-medium">{item.question}</h3>
            <svg
              className="h-5 w-5 transform transition duration-300 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p className="mt-4 px-4 text-sm text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
};

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions? We've got answers.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion 
            items={[
              {
                question: "How does the 14-day trial work?",
                answer: "Our 14-day trial gives you full access to all features of your chosen plan. No credit card is required to start, and you can cancel anytime during the trial period with no obligation."
              },
              {
                question: "Can I change plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the start of your next billing cycle."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee for your chosen plan."
              },
              {
                question: "What kind of support is included?",
                answer: "All plans include access to our help center and email support. The Professional plan includes priority support with faster response times, while Enterprise customers get a dedicated account manager."
              },
              {
                question: "Do you offer discounts for non-profits or educational institutions?",
                answer: "Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for more information."
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
