import React from 'react';

export default function MainView({ song, activeIndex = 0 }) {
  if (!song || !song.slides || song.slides.length === 0) {
    return (
      <div style={{
        backgroundColor: "black",
        color: "#555",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontFamily: "sans-serif"
      }}>
        Naghihintay ng kanta...
      </div>
    );
  }

  const currentSlide = song.slides[activeIndex] || song.slides[0];

  // Awtomatikong tinatanggal ang mga chords sa loob ng brackets para malinis sa projector
  const cleanLyrics = currentSlide.text.replace(/\[[^\]]+\]/g, "");

  return (
    <div style={{
      backgroundColor: "black",
      color: "white",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px",
      boxSizing: "border-box",
      textAlign: "center",
      fontFamily: "sans-serif",
      overflow: "hidden"
    }}>
      {/* Slide Label (Opsyonal kung gusto mong makita sa projector, pwedeng tanggalin kung puros lyrics lang) */}
      <div style={{
        color: "#666",
        fontSize: "1.5rem",
        marginBottom: "24px",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontWeight: "bold"
      }}>
        {currentSlide.label}
      </div>

      {/* Malaking Lyrics para sa Screen / Projector */}
      <div style={{
        fontSize: "4rem",
        fontWeight: "bold",
        lineHeight: "1.4",
        whiteSpace: "pre-line",
        maxWidth: "1200px"
      }}>
        {cleanLyrics}
      </div>
    </div>
  );
}
