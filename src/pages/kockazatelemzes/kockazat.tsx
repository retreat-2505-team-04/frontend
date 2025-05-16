
// @ts-nocheck

import React from "react";

export default function RiskAnalysisPage() {
    const containerStyle = {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(to bottom right, #202020, #000000)",
        color: "#f1f1f1",
        minHeight: "calc(100vh - 80px)",
        maxHeight: "calc(100vh - 80px)",
        overflowY: "scroll",
        backgroundImage: "url('https://images.unsplash.com/photo-1612409838200-7a7532c3c64c?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const cardStyle = {
        backgroundColor: "rgba(0,0,0,0.75)",
        borderRadius: "12px",
        padding: "30px",
        margin: "20px auto",
        maxWidth: "900px",
        boxShadow: "0 8px 16px rgba(255, 0, 128, 0.4)",
        height: '1200px',
    };

    const titleStyle = {
        fontSize: "2.5em",
        color: "#ff4dff",
        textAlign: "center",
        marginBottom: "20px",
    };

    const sectionStyle = {
        marginTop: "20px",
    };

    const sectionTitleStyle = {
        fontSize: "1.4em",
        color: "#ff99ff",
        borderBottom: "1px solid #ff99ff",
        paddingBottom: "5px",
        marginBottom: "10px",
    };

    const paragraphStyle = {
        fontSize: "1.1em",
        lineHeight: "1.6",
        color: "#dddddd",
    };

    const riskBox = (label, riskLevel) => {
        const colors = {
            Low: "#00ff99",
            Medium: "#ffaa00",
            High: "#ff4d4d",
        };
        return (
            <div style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                border: `2px solid ${colors[riskLevel]}`,
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
            }}>
                <strong style={{ color: colors[riskLevel] }}>{label}</strong>: {riskLevel} kockázat
            </div>
        );
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>☠️ Megrágási Kockázatelemzés</h1>
                <p style={paragraphStyle}>Az alábbi szekciók egy fiktív példán mutatják be, hogyan lehetne értékelni a zombik által jelentett megrágási kockázatot különféle tényezők alapján.</p>

                <div style={sectionStyle}>
                    <h2 style={sectionTitleStyle}>🧠 Zombi Viselkedési Profil</h2>
                    <p style={paragraphStyle}>Zombi ID: ZB-042<br />Utolsó megrágás: 2 napja<br />Harapási arány: 34%</p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={sectionTitleStyle}>📦 Csomag Jellemzők</h2>
                    <p style={paragraphStyle}>Típus: "VIP túlélőkészlet"<br />Agylekvár arány: 82%<br />Csomag méret: Közepes</p>
                </div>

                <div style={sectionStyle}>
                    <h2 style={sectionTitleStyle}>⚖️ Kockázati Mutatók</h2>
                    {riskBox("Harapási előzmény kockázat", "Medium")}
                    {riskBox("Éhség szint", "High")}
                    {riskBox("Csomag vonzerő", "High")}
                    {riskBox("Zombi hűségindex", "Low")}
                </div>

                <div style={sectionStyle}>
                    <h2 style={sectionTitleStyle}>🔍 Összefoglaló Értékelés</h2>
                    <p style={paragraphStyle}><strong style={{ color: "#ff4d4d" }}>Veszélyesen megrágható</strong> – ez a zombi valószínűleg nem bír majd ellenállni a csábításnak. Érdemes másik futárt választani vagy agylekvár-mentes csomagot küldeni.</p>
                </div>
            </div>
        </div>
    );
}
