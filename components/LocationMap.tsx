'use client'

import { useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationMap = () => {
  // Address: 20870 Ventura Blvd, Woodland Hills, CA 91364
  const [viewport] = useState({
    latitude: 34.165967988302405,
    longitude: -118.58714004601191,
    zoom: 17
  });

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!mapboxToken) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-600">Map token not configured</p>
      </div>
    );
  }

  return ( 
    <div id="map-container" className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude: viewport.longitude,
          latitude: viewport.latitude,
          zoom: viewport.zoom
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <NavigationControl />
        <Marker 
          longitude={viewport.longitude} 
          latitude={viewport.latitude}
        >
          <div className="text-4xl" style={{ marginBottom: '20px' }}>📍</div>
        </Marker>
      </Map>
    </div>
   );
}
 
export default LocationMap;
