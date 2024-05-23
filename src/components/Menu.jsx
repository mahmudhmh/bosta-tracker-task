import Hamburger from "hamburger-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t, i18n } = useTranslation();

  const [isOpen, setOpen] = useState(false);

  function handleLang() {
    if (i18n.language === "ar") i18n.changeLanguage("en");
    else i18n.changeLanguage("ar");
  }
  return (
    <div>
      <Hamburger toggled={isOpen} toggle={setOpen} className="hamburger__nav" />
      {isOpen && (
        <div className="menu">
          <ul className="menu__options">
            <li className="menu__option option">
              <span className="nav__link">{t("middleNav.Main")}</span>
            </li>
            <li className="menu__option option">
              <span className="nav__link"> {t("middleNav.pricing")}</span>
            </li>
            <li className="menu__option option">
              <span className="nav__link">{t("middleNav.blog")}</span>
            </li>
            <li className="menu__option option" onClick={handleLang}>
              {i18n.language === "en" && (
                <span className="nav__link">العربية</span>
              )}
              {i18n.language === "ar" && (
                <span className="nav__link">Engilsh</span>
              )}
            </li>
          </ul>

          <a className="btn nav__link signIn">{t("signin")}</a>
          <button className="btn btn-signUp">{t("signup")}</button>
        </div>
      )}
    </div>
  );
}
