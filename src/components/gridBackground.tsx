import biohazard from '../biohazard-lighter.svg';
import React from "react";

export default function GridBackground() {
    return (
        <div className="relative isolate -z-10">
            <svg
                className="absolute inset-x-0 top-0 -z-10 h-[16rem] sm:h-[32rem] lg:h-[48rem] xl:h-[64rem] w-full stroke-gray-300 dark:stroke-gray-500 opacity-60 [mask-image:radial-gradient(8rem_8rem_at_center,white,transparent)] sm:[mask-image:radial-gradient(16rem_16rem_at_center,white,transparent)] lg:[mask-image:radial-gradient(24rem_24rem_at_center,white,transparent)] xl:[mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                        width={100}
                        height={100}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <Biohazard />
        </div>
    );
}

function Biohazard() {
    return (<div className="biohazard-symbol">
        <img src={biohazard} alt="Biohazard" style={{ marginLeft: '30%', marginTop: '10%' }} className="absolute z-10 h-24 w-24 sm:h-48 sm:w-48 lg:h-64 lg:w-64" /> {/* Adjust size as needed */}
    </div>);
}