import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Limitless Software Solutions Logo"
    >
      <defs>
        {/* Blue to Cyan Gradient for Infinity Loop */}
        <linearGradient id="infinityGrad" x1="50" y1="40" x2="190" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0D62FE" />
          <stop offset="60%" stopColor="#1575FF" />
          <stop offset="100%" stopColor="#00D2FF" />
        </linearGradient>

        {/* 3D L-Stem Gradient */}
        <linearGradient id="lStemGrad" x1="15" y1="20" x2="65" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0E2356" />
          <stop offset="100%" stopColor="#051238" />
        </linearGradient>

        {/* 3D L-Bevel Facet */}
        <linearGradient id="lBevelGrad" x1="15" y1="20" x2="45" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#0E2B6C" />
        </linearGradient>

        {/* Glow Filter for Circuit Dots */}
        <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00D2FF" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* Stylized 3D L */}
      <g>
        {/* Main L Stem Front Face */}
        <path
          d="M20 22 L52 8 L52 108 L102 85 L102 118 L20 152 Z"
          fill="url(#lStemGrad)"
        />
        {/* L Top/Side Bevel Highlight */}
        <path
          d="M20 22 L36 14 L52 8 L52 108 L36 116 Z"
          fill="url(#lBevelGrad)"
          opacity="0.9"
        />
        {/* Bottom Shelf Bevel */}
        <path
          d="M20 152 L36 138 L102 108 L102 118 Z"
          fill="#050E28"
        />
      </g>

      {/* Intertwined Infinity Loop */}
      <g>
        {/* Left arc of infinity passing behind/through L */}
        <path
          d="M58 84 C 44 60, 68 44, 94 56 C 120 68, 142 116, 168 112 C 188 108, 194 88, 180 72 C 166 56, 140 68, 122 84"
          fill="none"
          stroke="url(#infinityGrad)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Return loop crossing */}
        <path
          d="M120 86 C 104 102, 78 120, 54 104 C 42 96, 44 86, 54 80"
          fill="none"
          stroke="url(#infinityGrad)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Circuit Traces & Glow Nodes on right infinity curve */}
      <g filter="url(#cyanGlow)">
        {/* Upper circuit trace */}
        <path
          d="M136 56 Q 160 52 176 68"
          fill="none"
          stroke="#00D2FF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="136" cy="56" r="3.5" fill="#FFFFFF" stroke="#00D2FF" strokeWidth="1.5" />
        <circle cx="176" cy="68" r="2.5" fill="#FFFFFF" />

        {/* Lower circuit trace */}
        <path
          d="M144 118 Q 170 120 182 100"
          fill="none"
          stroke="#00D2FF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="182" cy="100" r="3.5" fill="#FFFFFF" stroke="#00D2FF" strokeWidth="1.5" />
        <circle cx="144" cy="118" r="2.5" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
