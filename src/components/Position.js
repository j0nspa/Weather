import React, { useEffect, useState } from 'react'
import Weather from './Weather';


export default function Position() {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setIsLoading(false);
      }, (error) => {
          alert("Paikannus epäonnistui.");
        }) 
     }     else {
          alert("You have disabled location access on your browser.")
        }
}, [])

    if (isLoading) {
        return (
            <p>
                Loading...    
            </p>

    )
    } else {
        return (
        <div className="content">
            <h3>Your position :</h3>
            <p>
                Position: &nbsp;
                |
                X {latitude.toFixed(3)},
                Y {longitude.toFixed(3)}
                |    
            </p>
            <Weather lat={latitude} lng={longitude} />
        </div>
        )
    }
}
