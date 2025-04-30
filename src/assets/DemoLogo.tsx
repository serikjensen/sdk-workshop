import React from "react";

interface LogoProps {
  height?: number;
  width?: number;
  color?: string;
  textColor?: string;
}

const DemoLogo: React.FC<LogoProps> = ({
  height = 40,
  width = 180,
  color = "#3366CC",
  textColor = "#E6F0FF", // Very light blue
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill={color} />
      <text
        x="50"
        y="25"
        fontFamily="Arial"
        fontSize="18"
        fontWeight="bold"
        fill={textColor}
      >
        DemoCo
      </text>
    </svg>
  );
};

export default DemoLogo;
