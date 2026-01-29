export const servicesIntroTexts = [
  {
    text: "Our journey began long before the company name came to be. In 1991, with the right mix of creativity and grit, our founder launched a design and print agency that laid the foundation for everything we build today.",
    alignment: "left" as const,
    width: "40%",
    className: "font-normal text-[32px] leading-[100%] tracking-[0%]",
    marginBottom: "mb-[200px]",
    textAlign: "text-left",
    delay: 0.5,
    // Mobile overrides
    mobileWidth: "90%",
    mobileClassName: "font-normal text-[18px] leading-[100%] tracking-[0%]",
    mobileTextAlign: "text-center",
    mobileMarginBottom: "mb-[80px]",
  },
  {
    text: 'That "turning 1991" is the year still cool or meaningful enough, thoughtfully designed books, spatial installations, exhibition environments, and brand expressions that surprise and inspire.',
    alignment: "right" as const,
    width: "40%",
    className: "font-normal text-[32px] leading-[100%] tracking-[0%]",
    marginBottom: "mb-[200px]",
    textAlign: "text-right",
    delay: 0.7,
    // Mobile overrides
    mobileWidth: "90%",
    mobileClassName: "font-normal text-[18px] leading-[100%] tracking-[0%]",
    mobileTextAlign: "text-center",
    mobileMarginBottom: "mb-[80px]",
  },
  {
    text: "Today, we bridge heritage with digital innovation. We craft immersive brand experiences that feel virtual meet—creating a seamless, lasting impression.",
    alignment: "left" as const,
    width: "40%",
    className: "font-normal text-[32px] leading-[100%] tracking-[0%]",
    marginBottom: "mb-[464px]",
    textAlign: "text-left",
    delay: 0.9,
    // Mobile overrides
    mobileWidth: "90%",
    mobileClassName: "font-normal text-[18px] leading-[100%] tracking-[0%]",
    mobileTextAlign: "text-center",
    mobileMarginBottom: "mb-[100px]",
  },
];

export const serviceHeading = {
  mainHeading: "Services",
  mainHeadingClassName: "font-bold text-[24px] leading-[100%] tracking-[0%]",
  subHeading: "In Pursuit of Optimisation",
  subHeadingClassName:
    "font-normal text-[48px] leading-[100%] tracking-[0%] mt-[15px]",
  containerClassName: "mx-[97px] mb-[86px]",
  // Mobile
  mobileMainClassName: "font-bold text-[16px] leading-[100%] tracking-[0%]",
  mobileSubClassName:
    "font-normal text-[28px] leading-[100%] tracking-[0%] mt-[10px] text-center",
  mobileContainerClassName: "mx-[20px] mb-[50px]",
};

export const serviceDetailCards = [
  {
    stripColor: "#8CC63F", // Green
    stripPosition: "right" as const,
    column1: {
      heading: "Brand Strategy & Communication",
      headingClassName: "font-normal text-[36px] leading-[100%] tracking-[0%]",
      description:
        "Defining your brand's story, voice, and messaging so it connects with the right audiences.",
      descriptionClassName:
        "font-normal text-[24px] leading-[100%] tracking-[0%] pl-[62px]",
      // Mobile
      mobileHeadingClassName:
        "font-normal text-[22px] leading-[100%] tracking-[0%] text-center",
      mobileDescriptionClassName:
        "font-normal text-[16px] leading-[100%] tracking-[0%] text-center pl-0",
    },
    column2: {
      heading: "What this includes",
      headingClassName: "font-normal text-[36px] leading-[100%] tracking-[0%]",
      pointers: [
        "Brand repositioning of new offerings",
        "Brand architecture strategy for navigating and brand extensions",
        "Brand positioning that guides us how your brand speaks across channels",
        "Strategic narrative framing to influence action where needed",
      ],
      pointerClassName: "font-normal text-[24px] leading-[100%] tracking-[0%]",
      numberTextGap: "gap-[8px]",
      // Mobile
      mobileHeadingClassName:
        "font-normal text-[22px] leading-[100%] tracking-[0%] text-center",
      mobilePointerClassName:
        "font-normal text-[16px] leading-[100%] tracking-[0%] text-center",
    },
  },
  {
    stripColor: "#000000", // Black
    stripPosition: "left" as const,
    column1: {
      heading: "Visual Identity & Design",
      headingClassName: "font-normal text-[36px] leading-[100%] tracking-[0%]",
      description:
        "Designing how your brand looks and feels across every touchpoint, creating a cohesive and memorable visual language.",
      descriptionClassName:
        "font-normal text-[24px] leading-[100%] tracking-[0%] pl-[62px]",
      // Mobile
      mobileHeadingClassName:
        "font-normal text-[22px] leading-[100%] tracking-[0%] text-center",
      mobileDescriptionClassName:
        "font-normal text-[16px] leading-[100%] tracking-[0%] text-center pl-0",
    },
    column2: {
      heading: "What this includes",
      headingClassName: "font-normal text-[36px] leading-[100%] tracking-[0%]",
      pointers: [
        "Visual identity — logos, colour palettes, typography, and design systems.",
        "Editorial design — books, magazines, annual reports/layouts, and brand guides.",
        "Graphic templates for social media, presentations and marketing materials across channels.",
      ],
      pointerClassName: "font-normal text-[24px] leading-[100%] tracking-[0%]",
      numberTextGap: "gap-[8px]",
      // Mobile
      mobileHeadingClassName:
        "font-normal text-[22px] leading-[100%] tracking-[0%] text-center",
      mobilePointerClassName:
        "font-normal text-[16px] leading-[100%] tracking-[0%] text-center",
    },
  },
  {
    stripColor: "#8CC63F", // Green
    stripPosition: "right" as const,
    column1: {
      heading: "Digital Experience",
      headingClassName: "font-normal text-[36px] leading-[100%] tracking-[0%]",
      description:
        "Weaving functional and narrative elements through design and storytelling.",
      descriptionClassName:
        "font-normal text-[24px] leading-[100%] tracking-[0%] pl-[62px]",
      // Mobile
      mobileHeadingClassName:
        "font-normal text-[22px] leading-[100%] tracking-[0%] text-center",
      mobileDescriptionClassName:
        "font-normal text-[16px] leading-[100%] tracking-[0%] text-center pl-0",
    },
    column2: {
      heading: "What this includes",
      headingClassName: "font-normal text-[36px] leading-[100%] tracking-[0%]",
      pointers: [
        "Redesign design / UX/UI, mobile development.",
        "Online campaigns, and digital advertisements.",
        "Design graphics and other interactives.",
      ],
      pointerClassName: "font-normal text-[24px] leading-[100%] tracking-[0%]",
      numberTextGap: "gap-[8px]",
      // Mobile
      mobileHeadingClassName:
        "font-normal text-[22px] leading-[100%] tracking-[0%] text-center",
      mobilePointerClassName:
        "font-normal text-[16px] leading-[100%] tracking-[0%] text-center",
    },
  },
  {
    stripColor: "#8CC63F", // Green
    stripPosition: "left" as const,
    column1: {
      heading: "Brand Experience & Transformation",
      headingClassName: "font-normal text-[36px] leading-[100%] tracking-[0%]",
      description:
        "How your brand shows up in the world — through touchpoints that engage people and deliver.",
      descriptionClassName:
        "font-normal text-[24px] leading-[100%] tracking-[0%] pl-[62px]",
      // Mobile
      mobileHeadingClassName:
        "font-normal text-[22px] leading-[100%] tracking-[0%] text-center",
      mobileDescriptionClassName:
        "font-normal text-[16px] leading-[100%] tracking-[0%] text-center pl-0",
    },
    column2: {
      heading: "What this includes",
      headingClassName: "font-normal text-[36px] leading-[100%] tracking-[0%]",
      pointers: [
        "Packaging design for products",
        "Retail creative; exhibitions, and stalls",
        "Event creative; and furnish, illustrations, collateral signage, way-finder",
      ],
      pointerClassName: "font-normal text-[24px] leading-[100%] tracking-[0%]",
      numberTextGap: "gap-[8px]",
      // Mobile
      mobileHeadingClassName:
        "font-normal text-[22px] leading-[100%] tracking-[0%] text-center",
      mobilePointerClassName:
        "font-normal text-[16px] leading-[100%] tracking-[0%] text-center",
    },
  },
];

export const servicesClosingText = {
  text: "Your brand lives and breathes in many places — we make sure it looks and feels consistent everywhere.",
  className: "font-bold text-[40px] leading-[100%] tracking-[0%] text-center",
  containerClassName: "w-[90%] mx-auto",
  // Mobile
  mobileClassName:
    "font-bold text-[24px] leading-[100%] tracking-[0%] text-center",
  mobileContainerClassName: "w-[90%] mx-auto mb-[80px]",
};

export const servicesDetailTable = {
  containerClassName: "mt-[592px] mb-[176px] w-[90%] mx-auto",
  topBorderClassName: "border-t-2 border-black",
  rowClassName:
    "font-normal text-[24px] leading-[100%] tracking-[0%] py-[20px] border-b border-gray-300",
  bottomBorderClassName: "h-[9px] bg-black w-full mt-[20px]",
  rows: [
    {
      label: "Environmental",
      values: "events / exhibitions / stalls / interiors",
      expandable: true,
    },
    {
      label: "Print",
      values: "stationery / packaging / brochures / publications",
      expandable: true,
    },
    {
      label: "Digital",
      values: "websites / apps / social media / online ads / prototypes",
      expandable: true,
    },
    {
      label: "Communication",
      values: "voice / messaging / campaigns",
      expandable: true,
    },
  ],
  // Mobile
  mobileContainerClassName: "mt-[300px] mb-[100px] w-[90%] mx-auto",
  mobileRowClassName:
    "font-normal text-[16px] leading-[100%] tracking-[0%] py-[15px] border-b border-gray-300 text-center",
};

export const servicesImages = {
  hero: {
    desktop: "/assets/service/hero.jpg",
    mobile: "/assets/service/hero-mobile.jpg",
  },
};
