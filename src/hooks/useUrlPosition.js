import { useSearchParams } from "react-router-dom";
export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const map = searchParams.get("lng");
  return [lat, map];
}
