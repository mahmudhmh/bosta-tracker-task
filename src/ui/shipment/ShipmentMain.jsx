/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import problemImg from "../../assets/problem.png";
import { titleizeKeys } from "../../utils/removeTitleKeys";

export default function ShipmentMain({ TransitEvents }) {
  const { t, i18n } = useTranslation();

  const shipmentDate = (date) => {
    return new Intl.DateTimeFormat(i18n.language, {
      day: "numeric",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));
  };
  const shipmentTime = (date) => {
    return new Intl.DateTimeFormat(i18n.language, {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    }).format(new Date(date));
  };
  return (
    <div className="shipment__mains">
      <div className="shipment__main shipment__details">
        <h6>{t("Shipmentdetails")}</h6>
        <table className="table">
          <thead>
            <tr>
              <td>{t("table.Branch")}</td>
              <td>{t("table.Date")}</td>
              <td>{t("table.Time")}</td>
              <td>{t("table.Details")}</td>
            </tr>
          </thead>
          <tbody>
            {TransitEvents?.map(({ hub, state, timestamp }) => (
              <tr key={timestamp}>
                <td>{titleizeKeys(t(hub)) || "N/A"}</td>
                <td>{shipmentDate(timestamp)}</td>
                <td>{shipmentTime(timestamp)}</td>
                <td>
                  {i18n === "en" ? titleizeKeys(t(`${state}`)) : t(`${state}`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="shipment__main shipment__address">
        <h6>{t("Deliveryaddress")}</h6>
        <div className="address">
          <p className="address__text">
            امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 Cairo
          </p>
        </div>
        <div className="problem">
          <div className="problem__side">
            <img
              src={problemImg}
              alt="Problem Photo"
              className="problem__img"
            />
          </div>
          <div className="problem__side">
            <p className="problem__text">{t("isProblem")}</p>
            <button className="problem__btn">{t("ReportProblem")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
