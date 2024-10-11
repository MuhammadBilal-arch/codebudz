"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { toast } from "react-toastify";
import Loading from "../loading";
import { PiMapPinFill } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Map = ({
  lat,
  lng,
  height,
  zoom,
  showInfoWindow,
  mapCurrentPosition,
  mapLatLngPosition,
}) => {
  const containerStyle = {
    width: "100%",
    height: height || "420px",
  };

  const center = {
    lat: lat || 1.295831,
    lng: lng || 103.76261,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
  });

  const [selectedMarker, setSelectedMarker] = useState();
  const [mapPosition, setMapPosition] = useState(null);
  const [infoWindowToggle, setInfoWindowToggle] = useState(false);

  const onMarkerDragEnd = (e) => {
    if (e.domEvent.type === "click") {
      setInfoWindowToggle(true);
    }
    const geocoder = new window.google.maps.Geocoder();
    const latLng = {
      lat: parseFloat(e.latLng.lat()),
      lng: parseFloat(e.latLng.lng()),
    };
    geocoder
      .geocode({ location: latLng })
      .then((response) => {
        if (response.results[0]) {
          if (mapCurrentPosition !== undefined) {
            mapCurrentPosition(response.results[0]?.formatted_address);
          }
          if (mapLatLngPosition !== undefined) {
            mapLatLngPosition(latLng);
          }
          setSelectedMarker(response.results[0]);
          setMapPosition(latLng);
          setInfoWindowToggle(true);
        } else {
          toast("No Results found", {
            progressClassName: "fancy-progress-bar",
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      })
      .catch((e) => {
        toast("No results found", {
          progressClassName: "fancy-progress-bar",
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  const handleMapClick = (e) => {
    const latLng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMapPosition(latLng);
    if (mapLatLngPosition) {
      mapLatLngPosition(latLng);
    }
  };

  return isLoaded ? (
    <div className="relative flex items-center justify-center">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapPosition || center}
        zoom={zoom || 15}
        onClick={handleMapClick}
      >
        <Marker
          position={mapPosition || center}
          draggable={true}
          visible={true}
          icon={"/assets/images/pin.png"}
          onDragEnd={(e) => onMarkerDragEnd(e)}
          onClick={(e) => onMarkerDragEnd(e)}
        >
          {showInfoWindow && infoWindowToggle && (
            <InfoWindow
              position={mapPosition || center}
              onCloseClick={() => setInfoWindowToggle(false)}
            >
              <p>{selectedMarker?.formatted_address}</p>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
      <div
        className="max-w-[1440px] mx-auto absolute bg-white p-5 md:h-20 w-10/12  -bottom-7 z-[1000] 
      grid md:grid-cols-3 gap-6 md:gap-4 poppins-family text-sm md:text-base"
      >
        <div className="flex items-center md:justify-center space-x-4">
          <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center">
            <PiMapPinFill className="text-white text-xl" />
          </div>
          <div>
            101 Merritt 5, north tower
            <br />
            14851 New York, USA
          </div>
        </div>
        <div className="flex items-center md:justify-center space-x-4">
          <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center">
            <BsFillTelephoneFill className="text-white text-xl" />
          </div>
          <div>
            <div className="text-gray-extradark text-xs md:text-sm">Get in touch</div>
            <div className="font-medium">+088 11 22 00 44</div>
          </div>
        </div>
        <div className="flex items-center md:justify-center space-x-4">
          <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center">
            <BsFillTelephoneFill className="text-white text-xl" />
          </div>
          <div>
            <div className="text-gray-extradark text-xs md:text-sm">Quick Email Us</div>
            <div className="font-medium">ontech@envato.com</div>
          </div>
        </div>

      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default React.memo(Map);
