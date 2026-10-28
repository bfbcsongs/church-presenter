"use client";
import React, { useState } from 'react';
import ControllerView from '@/components/ControllerView';

// Halimbawa muna ng sample song data para ma-test natin ang app
const sampleSong = {
  title: "Dakilang Katapatan",
  artist: "Koro",
  slides: [
    { label: "Verse 1", text: "[G]Sadyang kay [D/F#]tapat ng [Em]Panginoon [C]\n[G]Ang Kanyang [D]kabutihan ay [C]magpakailanman" },
    { label: "Pre-Chorus", text: "[Am]Maging sa [Em]panahon ng [F]pagsubok [D]\n[G]Ay kasama [C]ka" },
    { label: "Chorus", text: "[G]Papurihan ang [D]Diyos [Em]Alleluia [C]\n[G]Dakigin ang [D]Kanyang [C]ngalan" }
  ]
};

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <main>
      <ControllerView 
        song={sampleSong} 
        onSlideSelect={(index) => {
          setCurrentSlideIndex(index);
          console.觉log("Active Slide:", index);
        }} 
      />
    </main>
  );
}

