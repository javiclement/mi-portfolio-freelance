"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CookieBanner } from "@/components/layout/cookie-banner";

export function AnalyticsConsent({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    // Comprobamos si el usuario ya aceptó antes
    const saved = localStorage.getItem("cookie_consent");
    if (saved === "granted") {
      setConsent(true);
    }
  }, []);

  return (
    <>
      {/* Solo cargamos Google Analytics si hay consentimiento */}
      {consent && <GoogleAnalytics gaId={gaId} />}
      
      {/* El banner gestiona la interfaz visual */}
      <CookieBanner 
        onAccept={() => setConsent(true)} 
        onDeny={() => setConsent(false)} 
      />
    </>
  );
}