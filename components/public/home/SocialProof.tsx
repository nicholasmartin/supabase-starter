"use client";

export function SocialProof() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of companies already using SaaSMatrix to grow their business.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'].map((brand, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-8 w-32 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
