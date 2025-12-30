import Button from './ui/Button';

export default function StatsSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/20 via-white to-primary/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-primary">35+ Years</span> of Getting
              <br />
              Things Done.
            </h2>
            
            <p className="text-base md:text-lg text-text-secondary max-w-lg">
              We're a developer-first design team. From creating a product that developers will love to building out the infrastructure that will scale with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">10K+</div>
                <p className="text-sm text-text-secondary">Projects Completed</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">20+</div>
                <p className="text-sm text-text-secondary">Countries Served</p>
              </div>
            </div>

            <div className="mt-4">
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-video lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-white/20 text-6xl font-bold">
                Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

