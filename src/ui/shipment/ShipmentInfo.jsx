/* eslint-disable react/prop-types */
import { ORDER_STATUSES_TO_COLORS } from "../../constants/orderStatus";
import { titleizeKeys } from "../../utils/removeTitleKeys";
import ShipmentMain from "./ShipmentMain";

import Progress from "./Progress";
import { useTranslation } from "react-i18next";

export default function ShipmentInfo({ trackingData }) {
  const { t, i18n } = useTranslation();
  const {
    CurrentStatus,
    provider,
    TrackingNumber,
    PromisedDate,
    TransitEvents,
  } = trackingData;

  const { state, timestamp } = CurrentStatus;
  const lastUpdateDate = (date) => {
    return new Intl.DateTimeFormat(i18n.language, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));
  };

  const deliveryTime = (date) => {
    return new Intl.DateTimeFormat(i18n.language, {
      day: "numeric",
      weekday: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));
  };
  return (
    <>
      <div className="shipment__container">
        <div className="shipment__infos">
          <div className="shipment__info">
            <h5>
              {t("Shipment_Num")} {TrackingNumber}
            </h5>
            <h3
              className={`shipment__status text__${ORDER_STATUSES_TO_COLORS[state]}`}
            >
              {i18n.language === "en"
                ? titleizeKeys(t(`${state}`))
                : t(`${state}`)}
            </h3>
          </div>
          <div className="shipment__info">
            <h5>{t("Last_updated")}</h5>
            <h3>{lastUpdateDate(timestamp)}</h3>
          </div>
          <div className="shipment__info">
            <h5>{t("Merchant_name")}</h5>
            <h3>{t(`${provider}`)}</h3>
          </div>

          {PromisedDate && (
            <div className="shipment__info">
              <h5>{t("Delivery_time_within")}</h5>
              <h3>{deliveryTime(timestamp)}</h3>
            </div>
          )}
        </div>
        <div className="shipment__tracking">
          {state && <Progress state={state} />}
        </div>
      </div>
      {TransitEvents && <ShipmentMain TransitEvents={TransitEvents} />}
    </>
  );
}
