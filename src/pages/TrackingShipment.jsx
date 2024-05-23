import "../styles/trackShipment.css";
import { useGetOrderQuery } from "../api/apiSlice";
import Error from "../components/Error";
import AppNav from "../components/AppNav";
import ShipmentInfo from "../ui/shipment/ShipmentInfo";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

function TrackingShipment() {
  const { trackId } = useParams();

  const { data: trackingData, error, isLoading } = useGetOrderQuery(trackId);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    trackingData && (
      <div className="track">
        <AppNav page="track" />
        <ShipmentInfo trackingData={trackingData} />
      </div>
    )
  );
}
export default TrackingShipment;
