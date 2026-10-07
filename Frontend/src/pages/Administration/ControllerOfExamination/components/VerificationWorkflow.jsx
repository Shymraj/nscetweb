"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Pin = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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
  const textColor = "text-[#1E56A0] dark:text-[#F5A400]";
  const numberColor = "text-[#F5A400] dark:text-[#F5A400]";
  const borderColor = "border-[#1E56A0]/20 dark:border-[#F5A400]/30";

  return (
    <div
      className={`relative w-full max-w-[340px] md:max-w-none md:w-[310px] lg:w-[340px] mx-auto md:mx-0 transition-transform duration-300 z-10 hover:z-30 hover:scale-[1.03] ${rotate} ${className}`}
    >
      <div className="bg-white dark:bg-neutral-900 p-1 md:p-1.5 rounded-[14px] shadow-[0px_3px_10px_0px_rgba(0,0,0,0.05)] dark:shadow-none border border-neutral-100 dark:border-neutral-800">
        <Pin className={`w-4 h-4 ${textColor} z-20 mb-0.5 mx-auto relative`} />
        <div
          className={`${bgColor} border ${borderColor} rounded-[10px] p-2 md:p-2.5 flex flex-row items-center gap-2.5 relative overflow-hidden`}
        >
          <div className="flex flex-col items-center justify-center min-w-[42px]">
            <span
              className={`${numberColor} text-lg md:text-xl font-handwriting drop-shadow-sm leading-none mb-0.5`}
              style={{
                fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
                fontWeight: 'bold'
              }}
            >
              {number}
            </span>
            <Icon className={`w-4 h-4 md:w-5 md:h-5 ${textColor} opacity-90`} />
          </div>
          <div className="flex flex-col border-l border-[#1E56A0]/20 dark:border-[#F5A400]/20 pl-2.5">
            <h3 
              className="text-xs md:text-sm font-bold text-neutral-800 dark:text-neutral-100 leading-tight mb-0.5"
              style={{ fontFamily: 'var(--font-subtopic, inherit)', fontWeight: 700 }}
            >
              {title}
            </h3>
            <p 
              className="text-neutral-600 dark:text-neutral-400 text-[11px] md:text-xs leading-snug tracking-tight"
              style={{ fontFamily: 'var(--font-body, inherit)', fontWeight: 400 }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6-step alternating zig-zag layout with compact spacing
const CARD_POSITIONS = [
  { className: "md:absolute md:top-0 md:left-0", rotate: "md:rotate-1" },
  { className: "md:absolute md:top-[100px] md:right-0", rotate: "md:-rotate-1" },
  { className: "md:absolute md:top-[200px] md:left-0", rotate: "md:rotate-1" },
  { className: "md:absolute md:top-[300px] md:right-0", rotate: "md:-rotate-1" },
  { className: "md:absolute md:top-[400px] md:left-0", rotate: "md:rotate-1" },
  { className: "md:absolute md:top-[500px] md:right-0", rotate: "md:-rotate-1" },
];

export default function VerificationWorkflow({
  features,
  className,
}) {
  const height = 640;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`bg-white dark:bg-[#0a0a0a] py-5 px-2.5 md:py-6 md:px-4 relative overflow-hidden rounded-2xl border border-gray-100 dark:border-neutral-900 ${className || ''}`}
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

        <div className="max-w-4xl mx-auto relative z-10">
          <div
            className="relative w-full max-w-[820px] mx-auto flex flex-col space-y-2.5 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` }}
          >
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
              viewBox={`0 0 1000 ${height}`}
              preserveAspectRatio="none"
            >
              <m.path
                d="M 200 45 C 500 45, 500 145, 800 145 C 500 145, 500 245, 200 245 C 500 245, 500 345, 800 345 C 500 345, 500 445, 200 445 C 500 445, 500 545, 800 545"
                stroke="currentColor"
                className="text-blue-200 dark:text-[#F5A400]/40"
                strokeWidth="2"
                strokeDasharray="8 6"
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ strokeDashoffset: 0 }}
                animate={{
                  strokeDashoffset: -140,
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
