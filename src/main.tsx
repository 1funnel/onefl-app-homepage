import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.scss";
import App from "./App.tsx";
import theme from "./theme";

import Clarity from "@microsoft/clarity";

if (import.meta.env.VITE_SITE_ENV === "production") {
  Clarity.init(import.meta.env.VITE_CLARITY_ID);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
