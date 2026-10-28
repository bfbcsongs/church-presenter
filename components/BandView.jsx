import React from 'react';

// Helper component para ilagay ang chords sa ibabaw ng bawat salita
function ChordLine({ text }) {
  const tokens = text.split(/(\[[^\]]+\][^\s\[]+|\s+)/g).filter(Boolean);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 8px", alignItems: "flex-end" }}>
      {tokens.map((token, index) => {
        const chordMatch = token.match(/^\[([^\]]+)\](.*)$/);

        if (chordMatch) {
          const chord = chordMatch[1];
          const word = chordMatch[2];

          return (
            <div key={index} style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span style={{ color: "#ff4081", fontWeight: "bold", fontSize: "0.95rem", lineHeight: "1.2" }}>
                {chord}
              </span>
              <span style={{ fontSize: "1.2rem", fontWeight: "500", color: "#ffffff" }}>
                {word}
              </span>
            </div>
          );
        }

        return (
          <div key={index} style={{ display: "inline-flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <span style={{ height: "1.2rem" }}></span>
            <span style={{ fontSize: "1.2rem", color: "#ffffff" }}>{token}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function BandView({ song, activeIndex = 0 }) {
  if (!song || !song.slides) {
    return (
      <div style={{ backgroundColor: "#121212", color: "#aaa", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        Naghihintay ng kanta...
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: "#121212",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 16px",
      boxSizing: "border-box",
      fontFamily: "sans-serif"
    }}>
      <div style={{ width: "100%", maxWidth: "480px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px", borderBottom: "1px solid #333", paddingBottom: "10px" }}>
          <h2 style={{ margin: "0 0 4px 0", fontSize: "1.5rem", color: "#fff" }}>{song.title}</h2>
          {song.artist && <span style={{ fontSize: "0.9rem", color: "#888" }}>{song.artist}</span>}
        </div>

        {song.slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          const opacity = isActive ? 1 : isPast ? 0.45 : 0.7;
          const borderColor = isActive ? "#ff4081" : "transparent";

          return (
            <div
              key={index}
              style={{
                margin: "12px 0",
                padding: "16px",
                borderRadius: "12px",
                backgroundColor: isActive ? "#1e1e2e" : "#1a1a1a",
                border: `2px solid ${borderColor}`,
                opacity: opacity,
                transition: "all 0.3s ease-in-out",
                boxShadow: isActive ? "0 4px 16px rgba(255, 64, 129, 0.25)" : "none"
              }}
            >
              <div style={{
                fontSize: "0.8rem",
                color: isActive ? "#ff4081" : "#888",
                fontWeight: "bold",
                marginBottom: "10px",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>
                {slide.label} {isActive && "◄ LIVE"}
              </div>

              {slide.text.split("\n").map((line, lineIdx) => (
                <div key={lineIdx} style={{ marginBottom: "8px" }}>
                  <ChordLine text={line} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
