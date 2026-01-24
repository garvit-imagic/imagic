// SEO utilities

export const generateStructuredData = (type: string, data: any) => {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
};

export const generateOrganizationSchema = () => {
  return generateStructuredData("Organization", {
    name: "IMagic Creatives",
    description: "Integrated design studio shaping brand experiences",
    url: "https://imagiccreatives.com",
    logo: "https://imagiccreatives.com/logo.png",
    sameAs: [
      // Add social media links here
    ],
  });
};

export const generateWebsiteSchema = () => {
  return generateStructuredData("WebSite", {
    name: "IMagic Creatives",
    url: "https://imagiccreatives.com",
    description: "Integrated design studio shaping brand experiences",
    publisher: {
      "@type": "Organization",
      name: "IMagic Creatives",
    },
  });
};
