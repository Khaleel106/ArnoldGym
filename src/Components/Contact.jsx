//AIzaSyBLcCqTa3NrSHQb0MMjk-Z-4HRa047UzRA
import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const Contact = ({ google }) => {
  const position = {
    lat: 14.745715,
    lng: 78.55693, 
  };

  const handleMapClick = () => {
    const { lat, lng } = position;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
   <>
      <div>
      <h2 className="text-center text-3xl xl:text-5xl my-5 ">
        Visit <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text mt-5 my-5">OurGym</span>
      </h2>
      <Map
        google={google}
        zoom={14}
        initialCenter={position}
        onClick={handleMapClick}
        style={{ width: "90%", height: "70vh" }}
      >
        <Marker title="Gym Location" name="Gym" position={position} />
      </Map>
    </div>
   </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBLcCqTa3NrSHQb0MMjk-Z-4HRa047UzRA", 
})(Contact);
