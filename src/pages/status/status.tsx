
// @ts-nocheck

import React, { useState } from "react";

export default function StatusPage() {
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleCheckStatus = () => {
        fetch(`https://team-4.retreat.alerant.hu/api/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer YOUR_TOKEN_HERE`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Hiba történt a lekérdezés során.");
                return res.json();
            })
            .then((data) => {
                setStatus(data.status);
                setError(null);
            })
            .catch((err) => {
                setStatus(null);
                setError("Nem található rendelés ezzel az azonosítóval.");
            });
    };

    const containerStyle = {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(to bottom right, #222, #000)",
        color: "#f1f1f1",
        minHeight: "calc(100vh - 80px)",
        maxHeight: "calc(100vh - 80px)",
        overflowY: "scroll",
        backgroundImage: "url('https://images.unsplash.com/photo-1618005198919-455b6b7f3e84?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const cardStyle = {
        backgroundColor: "rgba(0,0,0,0.75)",
        borderRadius: "12px",
        padding: "30px",
        margin: "20px auto",
        maxWidth: "600px",
        boxShadow: "0 8px 16px rgba(0, 255, 128, 0.3)",
        textAlign: "center",
    };

    const inputStyle = {
        padding: "10px",
        fontSize: "1em",
        borderRadius: "6px",
        border: "1px solid #00ff99",
        width: "80%",
        marginBottom: "20px",
        backgroundColor: "#111",
        color: "#fff",
    };

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "1em",
        backgroundColor: "#00ff99",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        color: "#000",
        fontWeight: "bold",
    };

    const statusStyle = {
        fontSize: "1.2em",
        color: "#9fff00",
        marginTop: "20px",
    };

    const errorStyle = {
        fontSize: "1.1em",
        color: "#ff4d4d",
        marginTop: "20px",
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={{ color: "#00ff99" }}>📦 Rendelés Státusz Lekérdezése</h1>
                <p>Írd be a rendelés azonosítóját, hogy megtudd, hova tévedt a csomagod!</p>
                <input
                    style={inputStyle}
                    type="text"
                    placeholder="Pl.: ORDER123"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
                <br />
                <button style={buttonStyle} onClick={handleCheckStatus}>
                    Lekérdezés
                </button>

                {status && <p style={statusStyle}>📦 Aktuális státusz: <strong>{status}</strong></p>}
                {error && <p style={errorStyle}>{error}</p>}
            </div>
        </div>
    );
}
