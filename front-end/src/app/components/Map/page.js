"use client";
import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

export default function Map() {
    const containerStyle = {
        width: '100vw',
        height: '400px'
    };
    const options = {
        mapId: "30dcd4c04b5382ff ",
        mapTypeControl: false,
        zoomControl: true,
        fullscreenControl: false,
        clickableIcons : false,
      
        streetViewControl: false,
        alertControl: false,
        Colors : "red"
    }
    const center = {
        lat:  47.9174432529753,   
        lng:   106.93433267481502
    };
        const { isLoaded } = useJsApiLoader({
            googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        }) 
    return isLoaded ? (
            
            <GoogleMap
                mapContainerStyle={containerStyle}
                options={options}
                center={center}
                zoom={10}
            
            >
               <MarkerF position={{lat :47.9174432529753,  lng : 106.93433267481502}}/>
                <></>
            </GoogleMap>
        ) : <></>
    }

