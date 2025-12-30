import type { FeatureCard } from '@/types';

const features: FeatureCard[] = [
  {
    title: 'AI & ML',
    description: 'Harness the power of Artificial Intelligence and Machine Learning to transform your business operations and decision-making processes.',
  },
  {
    title: 'Web',
    description: 'Build stunning, responsive web applications that deliver exceptional user experiences across all devices and platforms.',
  },
  {
    title: 'Mobile',
    description: 'Create native and cross-platform mobile applications that engage users and drive business growth.',
  },
  {
    title: 'Cloud',
    description: 'Leverage cloud infrastructure to scale your applications, improve performance, and reduce operational costs.',
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
  },
  {
    title: 'IoT',
    description: 'Connect and manage IoT devices to create smart solutions that enhance efficiency and innovation.',
  },
  {
    title: 'Blockchain',
    description: 'Implement secure, transparent, and decentralized solutions using cutting-edge blockchain technology.',
  },
  {
    title: 'DevOps',
    description: 'Streamline development and operations with automated CI/CD pipelines and infrastructure as code.',
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Designed to <span className="text-primary">Deliver</span>
            <br />
            — Literally.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${
                index % 2 === 0
                  ? 'bg-primary hover:bg-primary-light'
                  : 'bg-white border-2 border-gray-100 hover:border-primary'
              }`}
            >
              <div className="flex flex-col gap-4 h-full">
                <div className="flex-1">
                  <div
                    className={`w-full aspect-video rounded-xl mb-4 ${
                      index % 2 === 0 ? 'bg-white/20' : 'bg-gray-100'
                    }`}
                  />
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      index % 2 === 0 ? 'text-dark' : 'text-text-primary'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      index % 2 === 0 ? 'text-dark/80' : 'text-text-secondary'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <h3 className="text-3xl md:text-4xl font-bold">
            Start Your
            <br />
            <span className="text-primary">Project Today!</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

