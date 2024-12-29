"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon, LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Tooltip } from "react-leaflet";
import { Locale } from "@/app/i18n/config";

type MapType = "roadmap" | "satellite" | "hybrid" | "terrain";

type MapLocation = LatLngLiteral;

type MapProps = {
  center: LatLngLiteral;
  locations: MapLocation[];
  locale: Locale;
};

// eslint-disable-next-line react/display-name
export const Map: React.FC<MapProps> = ({ center, locations, locale }) => {
  const englishText = (
    <p className="rounded-lg border border-secondary bg-secondary px-10 py-5 text-xl text-white shadow-lg">
      <span className="font-bold">
        <span className="text-primary">Digi</span> Fly
      </span>{" "}
      Company <br /> welcomes you
    </p>
  );
  ///////////////////////////////////
  const arabicText = (
    <p className="rounded-lg border border-secondary bg-secondary px-10 py-5 text-right text-xl text-white shadow-lg">
      <span className="">
        شركة
        <span className="font-bold">
          {" "}
          <span className="text-primary">ديجى </span>{" "}
        </span>
        <span>فلاي</span>
      </span>{" "}
      ترحب بكم
    </p>
  );
  const [mapType] = useState<MapType>("roadmap");

  const getUrl = () => {
    const mapTypeUrls: Record<MapType, string> = {
      roadmap: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
      satellite: "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
      hybrid: "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
      terrain: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
    };
    return mapTypeUrls[mapType];
  };

  const mapMarkActiveIcon = new Icon({
    iconUrl: "active-map-marker.png",
    iconSize: [20, 30],
  });
  //////////////////////////////////////////////////
  const renderMarks = () => {
    return locations?.map((location) => (
      <div key={location.lat}>
        <Marker
          icon={mapMarkActiveIcon}
          position={{ lat: location.lat, lng: location.lng }}
        >
          {" "}
          <Tooltip direction="top" offset={[0, -40]} opacity={1} permanent>
            {locale === "ar" ? arabicText : englishText}
          </Tooltip>
        </Marker>
      </div>
    ));
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "60vh",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={center}
          zoom={30}
          minZoom={5}
          zoomControl={true}
          attributionControl={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url={getUrl()} />
          {renderMarks()}
        </MapContainer>
      </div>
    </>
  );
};
