"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            "serviceWorker" in navigator &&
            window.workbox !== undefined
        ) {
            const wb = window.workbox;
            wb.register();
        }
    }, []);

    return null;
}
