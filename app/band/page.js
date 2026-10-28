"use client";
import React, { useState } from 'react';
import BandView from '@/components/BandView';

const sampleSong = {
  title: "Dakilang Katapatan",
  slides: [
    { label: "Verse 1", text: "[G]Sadyang kay [D/F#]tapat ng [Em]Panginoon [C]\n[G]Ang Kanyang [D]kabutihan ay [C]magpakailanman" },
    { label: "Pre-Chorus", text: "[Am]Maging sa [Em]panahon ng [F]pagsubok [D]\n[G]Ay kasama [C]ka" },
    { label: "Chorus", text: "[G]Papurihan ang [D]Diyos [Em]Alleluia [C]\n[G]Dakigin ang [D]Kanyang [C]ngalan" }
  ]
};

export default function BandPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <BandView 
      song={sampleSong} 
      currentIndex={currentIndex} 
    />
  );
}
