import { Link } from "react-router-dom";
import EnLogo from "./EnLogo";
import ArLogo from "./ArLogo";
import { useTranslation } from "react-i18next";

export default function Logo() {
  const { i18n } = useTranslation();
  return (
    <div className="logo">
      <Link to="/">{i18n.language === "en" ? <EnLogo /> : <ArLogo />}</Link>
    </div>
  );
}
