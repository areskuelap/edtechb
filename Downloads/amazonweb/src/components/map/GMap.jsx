import React, { useEffect, useRef } from 'react';

const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  // list of the marker object along with icon, title & info
  const markerList = [
    {
      lat: -6.1649,
      lng: -77.946,
      icon: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
      info: '<div><h2>Info 1</h2><p>Lorem Ipsum is simply dummy text<br/> of the printing and typesetting industry.</p></div>',
      title: "Title 1"
    },
    {
      lat: -6.16475,
      lng: -77.9446,
      icon: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
      info: '<div><h2>Info 2</h2><p>Lorem Ipsum is simply dummy text<br/> of the printing and typesetting industry.</p></div>',
      title: "Title 2"
    },
    {
      lat: -6.1648,
      lng: -77.9447,
      icon: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
      info: '<div><h2>Info 3</h2><p>Lorem Ipsum is simply dummy text<br/> of the printing and typesetting industry.</p></div>',
      title: "Title 3"
    },
    {
      lat: -6.1649,
      lng: -77.9447,
      icon: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png',
      info: '<div><h2>Info 4</h2><p>Lorem Ipsum is simply dummy text<br/> of the printing and typesetting industry.</p></div>',
      title: "Title 4"
    }
  ];

  useEffect(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    markerList.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); 
  }, []);
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: -6.1647, lng: -77.9444 },
      zoom: 10
    });
  }
const createMarker = (markerObj) => {
  const marker = new window.google.maps.Marker({
    position: { lat: markerObj.lat, lng: markerObj.lng },
    map: googleMap,
    icon: {
      url: markerObj.icon,
      scaledSize: new window.google.maps.Size(50, 50)
    },
    title: markerObj.title
  });

  const infowindow = new window.google.maps.InfoWindow({ content: markerObj.info });
  marker.addListener("click", () => infowindow.open(googleMap, marker));

  return marker;
}

  return <div
    ref={googleMapRef}
    style={{ width: 1000, height: 500 }}
  />
}

export default GMap;