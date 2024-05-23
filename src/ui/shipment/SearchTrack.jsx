import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function SearchTrack() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h5 className="heading-5">{t("trackShipment.header")}</h5>
        <div className="input-group">
          <input
            type="number"
            placeholder={t("trackShipment.placeHolder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn-search">
            <HiOutlineSearch className="search-icon" />
          </button>
        </div>
      </label>
    </form>
  );
}
