import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import { ContextProvider } from "./Context/ContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ContextProvider>
          <main className="light">
            <App />
          </main>
        </ContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
