"use client";

import { useEffect, useState } from "react";
import DoveIcon from "./DoveIcon";

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // Start fade out after 2 seconds
        const timer = setTimeout(() => {
            setOpacity(0);
        }, 2000);

        // Remove from DOM after transition matches duration
        const cleanup = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearTimeout(cleanup);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f9fa] dark:bg-[#0f172a] transition-opacity duration-500 ease-in-out"
            style={{ opacity }}
        >
            <div className="animate-pulse">
                <DoveIcon className="w-64 h-64" withText={true} />
            </div>
        </div>
    );
}
