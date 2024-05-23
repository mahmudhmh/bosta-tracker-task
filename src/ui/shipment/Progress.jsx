import { HiCheck } from "react-icons/hi";
import { HiX, HiClock } from "react-icons/hi"; // Add more icons as needed
import { ORDER_STATUSES_TO_COLORS } from "../../constants/orderStatus";
import { useTranslation } from "react-i18next";
import { titleizeKeys } from "../../utils/removeTitleKeys";
import PropTypes from "prop-types";

const ICONS = {
  DELIVERED: HiCheck,
  CANCELLED: HiX,
  NOT_YET_SHIPPED: HiClock,
  // Add other states and their corresponding icons here
};

export default function Progress({ state }) {
  const { t, i18n } = useTranslation();
  let labelArray = [
    "Shipment_has_been_created",
    "Shipment_has_been_received_from_the_merchant",
    "NOT_YET_SHIPPED",
    "Shipment_is_out_for_delivery",
    "DELIVERED",
    "CANCELLED",
  ];

  // Remove 'DELIVERED' if the current state is 'CANCELLED'
  if (state === "CANCELLED") {
    labelArray = labelArray.filter((label) => label !== "DELIVERED");
  }

  const currentStepIndex = labelArray.findIndex((label) => state === label);

  return (
    <div className="ShipmentSteper">
      <div className="stepWrapper">
        {labelArray.map((label, index) => {
          const Icon = ICONS[label] || HiCheck;
          const isActive = index <= currentStepIndex;

          if (index > currentStepIndex) return null;

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
                    className={`circleWrapper__after bg__${ORDER_STATUSES_TO_COLORS[state]}`}
                  ></div>
                )}
              </div>
              <p>
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
