import React from 'react';

export default function Logo() {
  return (
    <svg 
      width="150.8" 
      height="58" 
      viewBox="46 0 260 100" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <text 
        x="50" 
        y="52" 
        fill="#006B6B" 
        fontFamily="Inter, Arial, sans-serif" 
        fontSize="48" 
        fontWeight="700"
      >
        Origin
      </text>
      <text 
        x="185" 
        y="52" 
        fill="#000000" 
        fontFamily="Inter, Arial, sans-serif" 
        fontSize="48" 
        fontWeight="800"
      >
        Labs
      </text>
      <text 
        x="165" 
        y="85" 
        fill="#64748B" 
        fontFamily="'IBM Plex Mono', monospace" 
        fontSize="15" 
        fontWeight="500" 
        textAnchor="middle" 
        letterSpacing="1"
      >
        Human . AI
      </text>
    </svg>
  );
}
