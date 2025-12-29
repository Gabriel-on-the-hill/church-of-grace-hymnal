"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import ServiceWorkerRegistration from "./ServiceWorkerRegistration";
import SplashScreen from "./SplashScreen";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <ThemeProvider>
            {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
            <ServiceWorkerRegistration />
            {children}
        </ThemeProvider>
    );
}
