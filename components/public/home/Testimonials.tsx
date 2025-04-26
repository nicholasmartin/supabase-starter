"use client";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const TestimonialCard = ({ quote, author, role, company }: TestimonialCardProps) => (
  <div className="rounded-lg border bg-card p-6 shadow-sm">
    <div className="mb-4 flex">
      {[...Array(5)].map((_, i: number) => (
        <svg
          key={i}
          className="h-5 w-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-muted-foreground mb-4">"{quote}"</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-xs text-muted-foreground">{role}, {company}</p>
    </div>
  </div>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our customers have to say about their experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <TestimonialCard
            quote="SaaSMatrix has completely transformed how we manage our customer relationships. Our team saves hours every week with the automation features."
            author="Jane Cooper"
            role="CEO"
            company="Acme Inc."
          />
          <TestimonialCard
            quote="The analytics dashboard gives us insights we never had before. We've been able to increase conversion rates by 45% in just three months."
            author="John Smith"
            role="Marketing Director"
            company="TechCorp"
          />
          <TestimonialCard
            quote="Implementation was seamless and the support team went above and beyond to ensure we were successful. Highly recommend!"
            author="Sarah Johnson"
            role="COO"
            company="Startify"
          />
        </div>
      </div>
    </section>
  );
}
