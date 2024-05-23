import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import TrackingShipment from "./pages/TrackingShipment";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
function App() {
  const { i18n } = useTranslation();

  return (
    <div className="app" dir={i18n.language === "en" ? "ltr" : "rtl"}>
      <Router>
        <Routes>
          <Route
            path="/:trackId"
            element={<TrackingShipment />}
            errorElement={<Error />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
