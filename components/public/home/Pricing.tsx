"use client";

import Link from 'next/link';

type PricingTierProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  popular?: boolean;
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  href?: string;
  [key: string]: any;
};

const Button = ({ children, variant = 'default', className = '', href, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  
  const sizeClasses = "h-10 py-2 px-4";
  
  const classes = `${baseStyles} ${variants[variant]} ${sizeClasses} ${className}`;
  
  if (href) {
    return <Link href={href} className={classes} {...props}>{children}</Link>;
  }
  
  return <button className={classes} {...props}>{children}</button>;
};

const PricingTier = ({ name, price, description, features, cta, popular = false }: PricingTierProps) => (
  <div className={`rounded-lg border ${popular ? 'border-primary' : 'border-border'} p-6 shadow-sm relative flex flex-col h-full`}>
    {popular && (
      <div className="absolute -top-3 left-0 right-0 flex justify-center">
        <span className="bg-primary text-primary-foreground text-xs font-semibold py-1 px-3 rounded-full">
          Most Popular
        </span>
      </div>
    )}
    <div className="mb-4 mt-2">
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="mt-2 flex items-baseline">
        <span className="text-3xl font-bold">${price}</span>
        <span className="ml-1 text-sm text-muted-foreground">/month</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
    <ul className="mb-6 mt-4 space-y-2 flex-grow">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center text-sm">
          <svg
            className="mr-2 h-4 w-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <Button
      variant={popular ? 'default' : 'outline'}
      className="w-full"
      href={cta.href}
    >
      {cta.text}
    </Button>
  </div>
);

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <PricingTier
            name="Starter"
            price="29"
            description="Perfect for small businesses and startups."
            features={[
              "Up to 5 users",
              "Basic analytics",
              "24/7 email support",
              "2GB storage"
            ]}
            cta={{ text: "Get Started", href: "/signup" }}
          />
          <PricingTier
            name="Professional"
            price="79"
            description="For growing teams that need more power."
            features={[
              "Up to 20 users",
              "Advanced analytics",
              "Priority support",
              "20GB storage",
              "Custom integrations"
            ]}
            cta={{ text: "Get Started", href: "/signup" }}
            popular={true}
          />
          <PricingTier
            name="Enterprise"
            price="199"
            description="For organizations with complex needs."
            features={[
              "Unlimited users",
              "Premium analytics",
              "Dedicated account manager",
              "100GB storage",
              "Custom integrations",
              "SSO authentication"
            ]}
            cta={{ text: "Contact Sales", href: "/contact" }}
          />
        </div>
      </div>
    </section>
  );
}
