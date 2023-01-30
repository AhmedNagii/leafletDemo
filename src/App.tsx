import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, Polyline } from 'react-leaflet'
import locations from "./data/locations.json"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sortedLocations = locations.sort((date1: any, date2: any) => date1.timestamp - date2.timestamp);


  const linePoints: any = locations.map(loc => [loc.lat, loc.long])

  return (


    <MapContainer center={[30.06, 31.23]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        locations.map(loc => (


          <Marker key={loc.id}
            position={[loc.lat, loc.long]}>

            <Popup position={[loc.lat, loc.long]}>
              <h2>{loc.timestamp}</h2>
            </Popup>
          </Marker>

        ))


      }
      {

        <Polyline positions={linePoints} ></Polyline>

      }


    </MapContainer>

  )
}

export default App
