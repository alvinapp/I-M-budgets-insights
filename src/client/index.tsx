import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import App from "client/app";
import { ErrorFallback } from "client/pages/components/ErrorView";
import { MemoryRouter } from "react-router-dom";
import React from "react";
const container: any = document.getElementById("app");
const root = createRoot(container);
const [someKey, setSomeKey] = React.useState(null);
root.render(
  <MemoryRouter>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setSomeKey(null)} // reset the state of your app here
      resetKeys={[someKey]}
    >
      <App />
    </ErrorBoundary>
  </MemoryRouter>
);
