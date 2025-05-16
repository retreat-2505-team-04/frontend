// @ts-nocheck

import React, { useEffect, useState } from "react";

export default function ZombiesPage() {
    const [zombies, setZombies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadScript = () => {
            if (window.google && window.google.maps) {
                initMap();
            } else {
                const script = document.createElement("script");
                script.src =
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAE3wbDbuAhKXlKldCZXtqudAlE6XM7aKs&callback=initMap";
                script.async = true;
                window.initMap = initMap; // important!
                document.body.appendChild(script);
            }
        };

        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById("map"), {
                center: { lat: 47.4979, lng: 19.0402 },
                zoom: 13,
                styles: [
                    { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
                    { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
                    { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
                    { featureType: "road", elementType: "geometry", stylers: [{ color: "#406880" }] },
                ],
            });

            zombies.forEach((z) => {
                new window.google.maps.Marker({
                    position: { lat: z.lat, lng: z.lng },
                    map,
                    title: z.name,
                    icon: {
                        url: "https://cdn-icons-png.freepik.com/256/8537/8537212.png",
                        scaledSize: new window.google.maps.Size(32, 32),
                    },
                });
            });
        };

        if (zombies.length > 0) {
            loadScript();
        }
    }, [zombies]);

    useEffect(() => {
        // Itt jönne az igazi API hívás, most csak mintaadat
        const dummyZombies = [
            {
                id: "ZB001",
                name: "Harapós Béla",
                lat: 47.4979,
                lng: 19.0402,
                speed: 1.4,
                energy: 62,
            },
            {
                id: "ZB002",
                name: "Csoszogó Edit",
                lat: 47.501,
                lng: 19.05,
                speed: 0.9,
                energy: 80,
            },
        ];
        setZombies(dummyZombies);
    }, []);

    const containerStyle = {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(to bottom right, #111, #000)",
        color: "#f1f1f1",
        minHeight: "calc(100vh - 80px)",
        maxHeight: "calc(100vh - 80px)",
        overflowY: "scroll",
        backgroundImage: "url('https://images.unsplash.com/photo-1616137584042-fefb1917e5c7?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const cardStyle = {
        backgroundColor: "rgba(0,0,0,0.75)",
        borderRadius: "12px",
        padding: "30px",
        margin: "20px auto",
        maxWidth: "900px",
        boxShadow: "0 8px 16px rgba(0, 255, 255, 0.3)",
    };

    const titleStyle = {
        fontSize: "2.5em",
        color: "#00ffff",
        textAlign: "center",
        marginBottom: "20px",
    };

    const mapStyle = {
        width: "100%",
        height: "400px",
        border: "2px solid #00ffff",
        borderRadius: "8px",
    };

    const zombieStyle = {
        marginTop: "20px",
        backgroundColor: "rgba(0,0,0,0.5)",
        border: "1px solid #00ffff",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>🧟‍♀️ Aktív Zombik Térképen</h1>
                <div id="map" style={mapStyle}></div>

                <h2 style={{ color: "#00ffff", marginTop: "30px" }}>🧟‍♂️ Részletek:</h2>
                {zombies.map((z) => (
                    <div key={z.id} style={zombieStyle}>
                        <strong>{z.name}</strong> (ID: {z.id})<br />
                        Pozíció: ({z.lat.toFixed(4)}, {z.lng.toFixed(4)})<br />
                        Sebesség: {z.speed} km/h<br />
                        Energia: {z.energy}%
                    </div>
                ))}
            </div>

            {/* Google Maps script betöltése */}
        </div>
    );
}
