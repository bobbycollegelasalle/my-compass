import React from "react";

// Creates a textured background effect using SVG filters
const StuccoBackground = () => (
  // Fixed positioning ensures background covers entire viewport
  // -z-10 places it behind other content
  <div className="fixed inset-0 -z-10">
    {/* SVG that stretches to fill container while maintaining aspect ratio */}
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Define the noise filter that creates the stucco texture */}
      <filter id="noise">
        {/* Create noise pattern using Perlin noise algorithm */}
        <feTurbulence
          type="fractalNoise" // Uses fractal noise for natural looking texture
          baseFrequency="0.6" // Controls size of the noise pattern
          numOctaves="2" // How detailed the noise is
          seed="5" // Ensures consistent pattern
          stitchTiles="stitch" // Makes the pattern seamlessly tile
        />
        {/* Remove color from the noise, making it grayscale */}
        <feColorMatrix type="saturate" values="0" />

        {/* Adjust the brightness and contrast of the noise */}
        <feComponentTransfer>
          <feFuncR type="gamma" amplitude="0.8" exponent="1" />
          <feFuncG type="gamma" amplitude="0.8" exponent="1" />
          <feFuncB type="gamma" amplitude="0.8" exponent="1" />
        </feComponentTransfer>

        {/* Blend the noise with the background colors */}
        <feBlend mode="soft-light" in2="SourceGraphic" />
      </filter>

      {/* Layer multiple rectangles with different colors and noise filters */}
      {/* Base layer - solid color */}
      <rect width="100" height="100" fill="#FFC0CB" />

      {/* Additional layers with noise filter applied */}
      {/* Each layer has different opacity and color to create depth */}
      <rect width="100%" height="100%" fill="#FFB6C1" filter="url(#noise)" opacity="0.25" />
      <rect width="100%" height="100%" fill="#FFC0CB" filter="url(#noise)" opacity="0.15" />
      <rect width="100%" height="100%" fill="#FFB0BE" filter="url(#noise)" opacity="0.1" />
    </svg>
  </div>
);

export default StuccoBackground;