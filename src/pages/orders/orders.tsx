// @ts-nocheck

import React, { useEffect, useState } from "react";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [newOrder, setNewOrder] = useState({ sender: "", recipient: "", description: "", datetime: "" });
    const [token, setToken] = useState("YOUR_TOKEN_HERE");

    const API_BASE = "http://team-4.retreat.alerant.hu/api";

    useEffect(() => {
        fetch(`${API_BASE}/orders`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch(() => setError("Nem sikerült betölteni a rendeléseket."));
    }, []);

    const createOrder = () => {
        fetch(`${API_BASE}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders([...orders, data]);
                setNewOrder({ sender: "", recipient: "", description: "", datetime: "" });
            })
            .catch(() => setError("Rendelés létrehozása sikertelen."));
    };

    const updateStatus = (id, newStatus) => {
        fetch(`${API_BASE}/orders/${id}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ status: newStatus, description: "Frissítés UI-ból" }),
        })
            .then(() => {
                setOrders(
                    orders.map((order) =>
                        order.id === id ? { ...order, status: newStatus } : order
                    )
                );
            });
    };

    const assignZombie = (id) => {
        fetch(`${API_BASE}/orders/${id}/assign-zombie`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => alert(`Zombi: ${data.zombie_name} (${data.suitability_score})`));
    };

    const fetchRisk = (id) => {
        fetch(`${API_BASE}/orders/${id}/risk`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => alert(`Kockázat: ${data.risk_level}\n${data.explanation}`));
    };

    const containerStyle = {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(to bottom right, #1b1b1b, #000000)",
        color: "#f1f1f1",
        minHeight: "calc(100vh - 80px)",
        maxHeight: "calc(100vh - 80px)",
        overflowY: "scroll",
        backgroundImage: "url('https://images.unsplash.com/photo-1614728894742-68f6cc0c86a5?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px"
    };

    const cardStyle = {
        backgroundColor: "rgba(0,0,0,0.75)",
        borderRadius: "12px",
        padding: "30px",
        margin: "20px auto",
        maxWidth: "900px",
        boxShadow: "0 8px 16px rgba(0, 255, 128, 0.3)"
    };

    const titleStyle = {
        fontSize: "2.5em",
        color: "#00ff99",
        textAlign: "center",
        marginBottom: "20px"
    };

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px"
    };

    const thTdStyle = {
        border: "1px solid #00ff99",
        padding: "10px",
        textAlign: "left",
        color: "#f1f1f1"
    };

    const errorStyle = {
        color: "#ff4d4d",
        textAlign: "center",
        marginTop: "20px"
    };

    const inputStyle = {
        padding: "10px",
        marginBottom: "10px",
        width: "100%",
        borderRadius: "6px",
        border: "1px solid #00ff99",
        backgroundColor: "#1b1b1b",
        color: "#f1f1f1"
    };

    const buttonStyle = {
        padding: "10px 20px",
        marginRight: "8px",
        backgroundColor: "#00ff99",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        color: "black"
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>📦 AgyKurier Rendelések</h1>
                {error && <p style={errorStyle}>{error}</p>}

                <h2 style={{ color: "#00ff99" }}>Új rendelés</h2>
                <input style={inputStyle} placeholder="Feladó" value={newOrder.sender} onChange={(e) => setNewOrder({ ...newOrder, sender: e.target.value })} />
                <input style={inputStyle} placeholder="Címzett" value={newOrder.recipient} onChange={(e) => setNewOrder({ ...newOrder, recipient: e.target.value })} />
                <input style={inputStyle} placeholder="Leírás" value={newOrder.description} onChange={(e) => setNewOrder({ ...newOrder, description: e.target.value })} />
                <input style={inputStyle} type="datetime-local" value={newOrder.datetime} onChange={(e) => setNewOrder({ ...newOrder, datetime: e.target.value })} />
                <button style={buttonStyle} onClick={createOrder}>Rendelés létrehozása</button>

                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thTdStyle}>ID</th>
                        <th style={thTdStyle}>Címzett</th>
                        <th style={thTdStyle}>Leírás</th>
                        <th style={thTdStyle}>Státusz</th>
                        <th style={thTdStyle}>Időpont</th>
                        <th style={thTdStyle}>Műveletek</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td style={thTdStyle}>{order.id}</td>
                            <td style={thTdStyle}>{order.recipient}</td>
                            <td style={thTdStyle}>{order.description}</td>
                            <td style={thTdStyle}>{order.status}</td>
                            <td style={thTdStyle}>{order.datetime}</td>
                            <td style={thTdStyle}>
                                <button style={buttonStyle} onClick={() => updateStatus(order.id, "Kézbesítve")}>Kézbesítve</button>
                                <button style={buttonStyle} onClick={() => assignZombie(order.id)}>Zombi</button>
                                <button style={buttonStyle} onClick={() => fetchRisk(order.id)}>Kockázat</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
