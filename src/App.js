import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

import "./App.css";
//import LeafletGeocoder from "./leafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

function App() {
  const position = [36.8188, 10.166];

  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <LeafletGeocoder /> */}
        <LeafletRoutingMachine />
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
});

L.Marker.prototype.options.icon = DefaultIcon;

export default App;
