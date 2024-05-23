import { HiCheck } from "react-icons/hi";
import { HiX, HiClock } from "react-icons/hi";
import { MdLocalShipping } from "react-icons/md";
import { RiUserReceived2Fill } from "react-icons/ri";
import { ORDER_STATUSES_TO_COLORS } from "../../constants/orderStatus";
import { useTranslation } from "react-i18next";
import { titleizeKeys } from "../../utils/removeTitleKeys";
import PropTypes from "prop-types";

const ICONS = {
  DELIVERED: HiCheck,
  CANCELLED: HiX,
  NOT_YET_SHIPPED: HiClock,
  Shipment_has_been_created: HiCheck,
  Shipment_has_been_received_from_the_merchant: RiUserReceived2Fill,
  Shipment_is_out_for_delivery: MdLocalShipping,
};

export default function Progress({ state }) {
  const { t, i18n } = useTranslation();

  let labelArray = [
    "Shipment_has_been_created",
    "Shipment_has_been_received_from_the_merchant",
    "NOT_YET_SHIPPED",
    "Shipment_is_out_for_delivery",
    "DELIVERED",
  ];

  if (state === "CANCELLED") {
    labelArray = [
      "Shipment_has_been_created",
      "Shipment_has_been_received_from_the_merchant",
      "NOT_YET_SHIPPED",
      "Shipment_is_out_for_delivery",
      "CANCELLED",
    ];
  }

  const currentStepIndex = labelArray.findIndex((label) => state === label);

  return (
    <div className="ShipmentSteper">
      <div className="stepWrapper">
        {labelArray.map((label, index) => {
          const Icon = ICONS[label] || HiCheck;
          const isActive = index <= currentStepIndex;

          return (
            <div className="stepBlock" key={label}>
              <div className="circleWrapper">
                <div
                  className={`circle bg__${
                    isActive ? ORDER_STATUSES_TO_COLORS[state] : "grey"
                  }`}
                >
                  <Icon size={20} />
                </div>
                {index < currentStepIndex && (
                  <div
                    className={`circleWrapper__after bg__${
                      isActive ? ORDER_STATUSES_TO_COLORS[state] : "grey"
                    }`}
                  ></div>
                )}
              </div>
              <p className={`${!isActive ? "text-grey" : ""}`}>
                {i18n.language === "en" ? titleizeKeys(t(label)) : t(label)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Progress.propTypes = {
  state: PropTypes.string.isRequired,
};
