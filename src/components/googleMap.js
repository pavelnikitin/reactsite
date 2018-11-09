import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 56.03337490000001, lng: 92.88050309999994 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 56.03337490000001, lng: 92.88050309999994 }} />}
  </GoogleMap>
));

<MyMapComponent
isMarkerShown
googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCe49OOGbyEYcub29-rI_FpR_UT8lRBNGE&v=3.exp&libraries=geometry,drawing,places"
loadingElement={<div style={{ height: `100%` }} />}
containerElement={<div style={{ height: `400px` }} />}
mapElement={<div style={{ height: `100%` }} />}
/>
