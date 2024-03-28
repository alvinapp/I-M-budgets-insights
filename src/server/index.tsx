import * as Sentry from "@sentry/browser";
import { render } from "react-dom";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

import App from "client/app";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { ErrorFallback } from "client/pages/components/ErrorView";
import { MemoryRouter } from "react-router-dom";
declare var AppConfig: AppConfig;

window.addEventListener("DOMContentLoaded", (event) => {
  // Sentry.init({
  //   dsn: "https://49fd015f35b4456bac1b0d0a5174bf2b@o1001447.ingest.sentry.io/6631517",
  //   environment: AppConfig.ENVIRONMENT,
  // });
  window.parent.postMessage(JSON.stringify({ action: "init" }), "*");
  window.removeEventListener("DOMContentLoaded", () => null);
});

const ServerApp = (config: IConfig) => {
  const init = useConfigurationStore((state: any) => state.init);
  init(config);

  return (
    <MemoryRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </MemoryRouter>
  );
};

window.addEventListener("message", (event) => {
  event.preventDefault();
  if (!event.data || typeof event.data !== "string") return;
  let eventData;
  try {
    eventData = JSON.parse(event.data);
  } catch {
    return;
  }
  if ("action" in eventData) return;
  const config: IConfig = {
    publicKey: eventData.publicKey,
    identifier: eventData.identifier,
    monoPubKey: eventData.monoPubKey,
    settings: eventData.settings,
    country: eventData.country,
  };
  if (eventData.styleUrl) {
    var link = document.createElement("link");
    var head = window.document.head;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = eventData.styleUrl;
    link.media = "all";
    head.appendChild(link);
  }

  return render(<ServerApp {...config} />, document.body);
});
