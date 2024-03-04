/* eslint-disable no-console */
import React from "react";

import { initialise } from "lib/utils/init";

import "./styles.css";
import * as Auth from "features/auth/lib/Provider";
import ErrorBoundary from "features/auth/components/ErrorBoundary";
import { Navigation } from "./Navigation";
import "./lib/i18n";
import { WalletProvider } from "features/wallet/WalletProvider";
import { useServiceWorkerUpdate } from "lib/utils/hooks/useServiceWorkerUpdate";
import { PWAInstallComponent } from "components/pwa/PWAInstallComponent";

// Initialise Global Settings
initialise();
/**
 * Top level wrapper for providers
 */
export const App: React.FC = () => {
  useServiceWorkerUpdate();

  return (
    <>
      <Auth.Provider>
        <WalletProvider>
          <ErrorBoundary>
            <Navigation />
            <div
              className="fixed top-2 left-1/2"
              style={{ zIndex: 5678907878 }}
            >
              <PWAInstallComponent />
            </div>
          </ErrorBoundary>
        </WalletProvider>
      </Auth.Provider>
    </>
  );
};
