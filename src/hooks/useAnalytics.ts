import { usePostHog } from "posthog-js/react";

const AnalyticsEvents = {
  CHECKOUT_SUCCESSFUL: "checkout_successful",
  DISCOUNT_APPLIED: "discount_applied"
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
