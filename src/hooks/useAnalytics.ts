import { usePostHog } from "posthog-js/react";

const AnalyticsEvents = {
  DISCOUNT_APPLIED: "Discount Applied",
  CHECKOUT_SUCCESSFUL: "Checkout Successful",
  BRAND_QUESTIONNAIRE_SUBMITTED: "Brand Questionnaire Submitted"
} as const;

export const useAnalytics = () => {
  const posthog = usePostHog();

  const captureEvent = (
    event: keyof typeof AnalyticsEvents,
    properties?: Record<string, string | boolean | Array<string>>
  ) => {
    posthog.capture(AnalyticsEvents[event], properties);
  };

  return {
    captureEvent
  };
};
