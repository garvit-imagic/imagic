// Analytics utilities

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, properties);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location || "unknown",
  });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent("form_submission", {
    form_name: formName,
    success,
  });
};

export const trackLinkClick = (linkText: string, url: string) => {
  trackEvent("link_click", {
    link_text: linkText,
    url,
  });
};
