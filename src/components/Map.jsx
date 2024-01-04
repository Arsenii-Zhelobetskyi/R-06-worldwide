import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  // to set use setSearchParams({ lat: 0, lng: 0 }})
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      MAP
    </div>
  );
}

export default Map;
