"use client";

import { useEffect, useState } from "react";
import { DoveIcon } from "./DoveIcon";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [isVisible, setIsVisible] = useState(true);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Phase 1: Fade In (0s to 0.5s)
        const fadeInTimer = setTimeout(() => {
            setOpacity(1);
        }, 50);

        // Phase 2: Fade Out (starts after 1.5s: 0.5s in + 1s steady)
        const fadeOutTimer = setTimeout(() => {
            setOpacity(0);
        }, 1500);

        // Phase 3: Unmount (after 2s: 1.5s + 0.5s out)
        const finishTimer = setTimeout(() => {
            setIsVisible(false);
            onFinish();
        }, 2000);

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(fadeOutTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1e3a5f] transition-opacity duration-500"
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <div
                className="text-center transition-opacity duration-500 ease-in-out"
                style={{ opacity: opacity }}
            >
                <div className="w-32 h-32 rounded-full bg-[#1e3a5f] border-4 border-[#c9a227] flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <DoveIcon className="w-20 h-20 text-[#c9a227]" />
                </div>
                <h1 className="text-3xl font-bold text-white tracking-wider font-serif">
                    Church of Grace
                    <br />
                    <span className="text-xl font-normal opacity-80 mt-2 block">Hymns</span>
                </h1>
            </div>
        </div>
    );
}
