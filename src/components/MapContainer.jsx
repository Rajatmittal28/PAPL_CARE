import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';

class MapContainer extends Component {
  render() {


    const { google, markerLocations } = this.props;



    const mapOptions = {
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }], // Hide POI labels
          },
          {
            featureType: 'road',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }], // Hide road labels
          },
        ],
      };

    return (
      <Map
        google={google}
        zoom={6}
        initialCenter={{
          lat: 28.6139, // Replace with your desired latitude
          lng: 77.2090, // Replace with your desired longitude
        }}
        
        options={mapOptions}
        styles={mapOptions.styles}
      >
        {markerLocations.map((position, index) => (
          <Marker title={'Marker Title'} name={'Marker Name'} key={index} position={position} />
        ))}

        <Polyline
          path={markerLocations} // Array of positions
          strokeColor="#000000" // Black color
          strokeOpacity={1.0} // Full opacity (1)
          strokeWeight={2} // Line thickness
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAlOXjePa3wBnpr8fM0N-BSxJ-0vTWcoEM', // Replace with your Google Maps API key
})(MapContainer);