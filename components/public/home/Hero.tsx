"use client";

import Link from 'next/link';

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

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Ultimate SaaS Solution for
              <span className="block text-primary">Modern Businesses</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Streamline your workflow, increase productivity, and scale your business with our all-in-one platform.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/signup">Get Started for Free</Button>
            <Button href="#features" variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border shadow-xl">
            <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-primary/5 relative">
              {/* Placeholder for dashboard preview */}
              <div className="absolute inset-0 flex items-center justify-center text-lg text-muted-foreground">
                Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
