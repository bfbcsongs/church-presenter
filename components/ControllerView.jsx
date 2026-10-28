import React, { useState, useEffect } from 'react';

export default function ControllerView({ song, onSlideSelect }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard navigation shortcuts para mabilis mag-next/prev ang operator
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!song || !song.slides) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setActiveIndex((prev) => {
          const next = prev < song.slides.length - 1 ? prev + 1 : prev;
          if (onSlideSelect) onSlideSelect(next);
          return next;
        });
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => {
          const next = prev > 0 ? prev - 1 : 0;
          if (onSlideSelect) onSlideSelect(next);
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [song, onSlideSelect]);

  if (!song || !song.slides) {
    return (
      <div style={{ padding: "30px", color: "#888", backgroundColor: "#121212", height: "100vh", fontFamily: "sans-serif" }}>
        Pumili ng kanta o maghintay ng active song...
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      minHeight: "100vh",
      backgroundColor: "#1e1e1e",
      color: "#fff",
      fontFamily: "sans-serif",
      boxSizing: "border-box"
    }}>
      {/* Header */}
      <div style={{ marginBottom: "20px", borderBottom: "1px solid #333", paddingBottom: "10px" }}>
        <h2 style={{ margin: "0 0 5px 0", fontSize: "1.4rem" }}>Controller: {song.title}</h2>
        <span style={{ fontSize: "0.9rem", color: "#aaa" }}>Gamitin ang Arrow keys o i-click ang slide para i-live</span>
      </div>

      {/* Slides Grid Selector */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "15px",
        alignContent: "start"
      }}>
        {song.slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const cleanText = slide.text.replace(/\[[^\]]+\]/g, "");

          return (
            <div
              key={index}
              onClick={() => {
                setActiveIndex(index);
                if (onSlideSelect) onSlideSelect(index);
              }}
              style={{
                border: isActive ? "3px solid #ff4081" : "1px solid #444",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: isActive ? "#2c1f30" : "#2a2a2a",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{
                fontSize: "0.8rem",
                color: isActive ? "#ff4081" : "#aaa",
                fontWeight: "bold",
                marginBottom: "8px",
                textTransform: "uppercase"
              }}>
                {slide.label} {isActive && "• ACTIVE"}
              </div>
              <div style={{
                fontSize: "0.95rem",
                lineHeight: "1.4",
                color: "#ddd",
                whiteSpace: "pre-line"
              }}>
                {cleanText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
