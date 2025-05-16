// @ts-nocheck

import React from "react";

export default function HomePage() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",

        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(to bottom right, #2c3e50, #000000)",
        color: "#f1f1f1",
        minHeight: "calc(100vh - 80px)",
        maxHeight: "calc(100vh - 80px)",
        overflowY: "scroll",
        width: "100%",
        maxWidth: "100vw",
        height: "100%",
        backgroundImage: "url('https://images.unsplash.com/photo-1589820296156-d5a4b6a9f3d7?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const cardStyle = {
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: "12px",
        padding: "30px",
        margin: "20px auto",
        maxWidth: "800px",
        boxShadow: "0 8px 16px rgba(0, 255, 0, 0.3)",
        textAlign: "center",
    };

    const headingStyle = {
        fontSize: "3em",
        color: "#9fff00",
        marginBottom: "10px",
    };

    const subtitleStyle = {
        fontSize: "1.5em",
        color: "#eeeeee",
        marginBottom: "20px",
    };

    const sectionTitleStyle = {
        fontSize: "1.3em",
        color: "#00ff99",
        margin: "20px 0 10px",
        textTransform: "uppercase",
        borderBottom: "1px solid #00ff99",
        paddingBottom: "5px",
    };

    const textStyle = {
        fontSize: "1.1em",
        lineHeight: "1.6",
        color: "#dddddd",
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={headingStyle}>🧟‍♂️ AgyKurier Futárszolgálat</h1>
                <p style={subtitleStyle}>A jövő logisztikája... élőhalott kézbesítéssel!</p>

                <h2 style={sectionTitleStyle}>Mi is ez?</h2>
                <p style={textStyle}>
                    A világ elzombult. Az emberiség maradéka most zombikat használ csomagszállításra. AgyKurier egy forradalmi rendszer,
                    ahol a zombik végre hasznos tagjai lehetnek a társadalomnak — vagy legalábbis kiszállítják a túlélőknek az agylekvárt.
                </p>

                <h2 style={sectionTitleStyle}>Mit tud a rendszer?</h2>
                <ul style={{ ...textStyle, listStyle: "square", textAlign: "left", maxWidth: "700px", margin: "0 auto" }}>
                    <li>📦 Rendeléskezelés zombibiztosan</li>
                    <li>📍 Kézbesítés nyomon követése élőben (vagy inkább élőhalottban)</li>
                    <li>🧠 Megrágási kockázatelemzés mesterséges intelligenciával</li>
                    <li>🚚 Dinamikus zombi-hozzárendelés sebesség és éhség alapján</li>
                    <li>💀 Státusz API: "Felvéve" – "Úton" – "Megrágva" – "Elveszett"</li>
                </ul>

                <h2 style={sectionTitleStyle}>Készen állsz?</h2>
                <p style={textStyle}>
                    Csatlakozz a digitális túlélők közösségéhez, és forradalmasítsd a futárszolgálatot! Ne aggódj, ha harap — csak ne a QR-kódra.
                </p>
            </div>
        </div>
    );
}
