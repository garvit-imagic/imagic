export interface ContactUsData {
  hero: {
    desktop: {
      backgroundImage: string;
      height: string;
      text: string;
      textWidth: string;
    };
    mobile: {
      backgroundImage: string;
      height: string;
      text: string;
      textWidth: string;
    };
  };
  marquee: {
    items: Array<{
      number: string;
      label: string;
    }>;
  };
  imageTextSection: {
    icon: {
      src: string;
      width: number;
      height: number;
      alt: string;
    };
    text: string;
    textWidth: string;
  };
}

export const contactUsData: ContactUsData = {
  hero: {
    desktop: {
      backgroundImage: "/assets/contact-us/hero-bg.svg",
      height: "600px",
      text: "We’re just as eager as you to get started !",
      textWidth: "70%",
    },
    mobile: {
      backgroundImage: "/assets/contact-us/hero-bg.svg",
      height: "400px",
      text: "Let's Create Something Amazing Together",
      textWidth: "80%",
    },
  },
  marquee: {
    items: [
      { number: "", label: '“I need a logo."' },
      { number: "", label: '“Can you help with branding?”' },
      { number: "", label: '“I need a website.”' },
      { number: "", label: '“We’re launching something new.”' },
      { number: "", label: '“I need some design work done.”' },
    ],
  },
  imageTextSection: {
    icon: {
      src: "/assets/contact-us/image-txt-section-image.svg",
      width: 68,
      height: 68,
      alt: "Contact Icon",
    },
    text: "If any of this sounds like you, you're in the right place.",
    textWidth: "60%",
  },
};
