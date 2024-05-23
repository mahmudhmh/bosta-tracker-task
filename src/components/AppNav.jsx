import "../styles/appNav.css";
import { HiChevronDown } from "react-icons/hi";
import Menu from "./Menu";
import { useState } from "react";
import Logo from "./Logo";
import SearchTrack from "../ui/shipment/SearchTrack";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
function AppNav({ page = "home" }) {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  function handleToggleLanguage() {
    const newLang = selectedLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setSelectedLang(newLang);
  }

  return (
    <nav>
      <Logo />
      {/* Start Middle side */}
      <div className="middle__side">
        <ul className="middle-side-options">
          <li className="option">
            <span className="nav__link">{t("middleNav.Main")}</span>
          </li>
          <li className="option">
            <span className="nav__link">{t("middleNav.pricing")}</span>
          </li>
          {page === "track" && (
            <li className="option">
              <span className="nav__link">{t("middleNav.callSales")}</span>
            </li>
          )}
        </ul>
      </div>
      {/* End Middle side */}

      {/* Start Right side */}
      <div className="right-side">
        <div className="shipment option">
          <div className="shipment-header">
            <span className="nav__link">{t("trackShipment.header")}</span>
          </div>

          <div className={`shipment-body ${page}`}>
            <SearchTrack />
          </div>
        </div>

        <a href="" className="signIn nav__link option">
          {t("signin")}
        </a>
        {page !== "track" && (
          <button className="btn-signUp">{t("signup")}</button>
        )}

        <button
          style={{ color: "#e30613" }}
          className="lng-toggle nav__link"
          onClick={handleToggleLanguage}
        >
          {selectedLang === "en" ? "AR" : "ENG"}
        </button>
      </div>
      {/* End Right side */}

      {/* Responsive */}
      <div className="mobile-right-side">
        <div className="shipment">
          <div
            className="shipment-header option"
            onClick={() => setIsOpen((open) => !open)}
          >
            <a className="nav__link">{t("trackShipment.header")}</a>
            <HiChevronDown size={20} className="arrow" />
          </div>
          {isOpen && (
            <div className={`shipment-body ${page}`}>
              <SearchTrack />
            </div>
          )}
        </div>
        <Menu />
      </div>
    </nav>
  );
}

export default AppNav;
