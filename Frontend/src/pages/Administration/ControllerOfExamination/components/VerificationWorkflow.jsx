"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";


const Pin = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  icon: Icon,
  className,
  rotate,
}) => {
  // NSCET blue/gold visual theme
  const bgColor = "bg-[#f0f7ff] dark:bg-neutral-950/80";
  const textColor = "text-[#1E56A0] dark:text-[#F5A400]"; // Gold in dark mode for pop
  const numberColor = "text-[#F5A400] dark:text-[#F5A400]";
  const borderColor = "border-[#1E56A0]/20 dark:border-[#F5A400]/30"; // Gold border in dark mode

  return (
    <div
      className={`relative w-full md:w-[420px] lg:w-[480px] transition-transform duration-300 z-10 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="bg-white dark:bg-neutral-900 p-2 rounded-[25px] shadow-[0px_10px_20px_0px_#D3D3D3] dark:shadow-none border border-neutral-100 dark:border-neutral-800">
        <Pin className={`w-8 h-8 ${textColor} z-20 mb-2 mx-auto relative`} />
        <div
          className={`${bgColor} border ${borderColor} rounded-[15px] p-4 flex flex-row items-center gap-5 relative overflow-hidden`}
        >
          <div className="flex flex-col items-center justify-center min-w-[70px]">
            <span
              className={`${numberColor} text-4xl font-handwriting drop-shadow-sm leading-none mb-2`}
              style={{
                fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
                fontWeight: 'bold'
              }}
            >
              {number}
            </span>
            <Icon className={`w-8 h-8 ${textColor} opacity-90`} />
          </div>
          <div className="flex flex-col border-l border-[#1E56A0]/20 dark:border-[#F5A400]/20 pl-4">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 leading-tight mb-1">
              {title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm/5 tracking-tight">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6-step alternating zig-zag layout with comfortable vertical spacing
const CARD_POSITIONS = [
  { className: "md:absolute md:top-0 md:left-0", rotate: "md:rotate-2" },
  { className: "md:absolute md:top-[170px] md:right-0", rotate: "md:-rotate-2" },
  { className: "md:absolute md:top-[340px] md:left-0", rotate: "md:rotate-2" },
  { className: "md:absolute md:top-[510px] md:right-0", rotate: "md:-rotate-2" },
  { className: "md:absolute md:top-[680px] md:left-0", rotate: "md:rotate-2" },
  { className: "md:absolute md:top-[850px] md:right-0", rotate: "md:-rotate-2" },
];

export default function VerificationWorkflow({
  features,
  className,
}) {
  const height = 1050; // Increased to accommodate new spacing without overlapping

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`bg-white dark:bg-[#0a0a0a] max-md:pt-10 max-md:pb-10 md:py-10 px-4 relative overflow-hidden rounded-3xl border border-gray-100 dark:border-neutral-900 ${className}`}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.08]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            marginTop: "4px",
          }}
        ></div>
        
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r dark:from-[#0a0a0a]"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l dark:from-[#0a0a0a]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative w-full max-w-[1100px] mx-auto flex flex-col space-y-6 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` }}
          >
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
              viewBox={`0 0 1000 ${height}`}
              preserveAspectRatio="none"
            >
              <m.path
                d="M 250 70 C 500 70, 500 240, 750 240 C 500 240, 500 410, 250 410 C 500 410, 500 580, 750 580 C 500 580, 500 750, 250 750 C 500 750, 500 920, 750 920"
                stroke="currentColor"
                className="text-blue-200 dark:text-[#F5A400]/40"
                strokeWidth="2.5"
                strokeDasharray="10 8"
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ strokeDashoffset: 0 }}
                animate={{
                  strokeDashoffset: -180, // Multiple of 18 (10+8)
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>

            {features.map((step, index) => {
              const position = CARD_POSITIONS[index];
              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
