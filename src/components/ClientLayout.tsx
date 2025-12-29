"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import SplashScreen from "./SplashScreen";
import ServiceWorkerRegistration from "./ServiceWorkerRegistration";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <SplashScreen />
            <ServiceWorkerRegistration />
            {children}
        </ThemeProvider>
    );
}
