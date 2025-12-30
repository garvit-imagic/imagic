'use client';

export default function MarqueeSection() {
  // Marquee items with numbers and 6 spaces between number and text
  const marqueeItems = [
    "01      Brand Strategy",
    "02      Visual Design",
    "03      Web Development",
    "04      Digital Marketing",
    "05      Content Creation",
  ];

  return (
    <section className="w-full">
      {/* Desktop Marquee */}
      <div className="hidden md:block">
        {/* Marquee Container with 2px border */}
        <div className="w-full h-[56px] border-b-2 border-black overflow-hidden relative bg-white">
          <div className="marquee-content-desktop flex items-center h-full">
            {Array(8).fill(marqueeItems).flat().map((text, index) => (
              <span
                key={index}
                className="inline-block font-semibold flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                  fontSize: '19px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  marginRight: '106px',
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        
        {/* 12px height strip with 40px padding on both sides */}
        <div className="w-full px-[40px] bg-transparent">
          <div className="h-[10px] bg-black w-full"></div>
        </div>
      </div>

      {/* Mobile Marquee */}
      <div className="md:hidden">
        {/* Marquee Container with 1px border */}
        <div className="w-full h-[46px] border-bottom border-black overflow-hidden relative bg-white">
          <div className="marquee-content-mobile flex items-center h-full">
            {Array(12).fill(marqueeItems).flat().map((text, index) => (
              <span
                key={index}
                className="inline-block font-semibold flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  marginRight: '58px',
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        
        {/* 4px height strip with 20px padding on both sides */}
        <div className="w-full px-[20px] bg-transparent">
          <div className="h-[3px] bg-black w-full"></div>
        </div>
      </div>

      <style jsx>{`
        .marquee-content-desktop {
          display: flex;
          white-space: nowrap;
          animation: scroll-desktop 20s linear infinite !important;
        }

        .marquee-content-mobile {
          display: flex;
          white-space: nowrap;
          animation: scroll-mobile 10s linear infinite !important;
        }

        @keyframes scroll-desktop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-mobile {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

