import posthog from "posthog-js/dist/module.full.no-external";

const posthogToken = "phc_sK6pmYEcfuf9QjjKAfAnWArpjqaUBuDGJy5JUUB58XnA";

posthog.init(posthogToken, {
  api_host: "/mlescevo",
  ui_host: "https://eu.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
});
