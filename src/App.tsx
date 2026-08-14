import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "@/components/ScrollToTop";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { ServicePage } from "@/pages/ServicePage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/:slug" element={<ServicePage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />}
        />
        <Route
          path="/politica-de-privacidad"
          element={<PrivacyPolicyPage />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
