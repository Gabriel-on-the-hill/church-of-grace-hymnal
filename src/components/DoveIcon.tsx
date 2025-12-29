export function DoveIcon({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 64 64"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Dove body */}
            <path
                d="M48 20c-4 0-8 2-10 5l-6-3c-2-1-4-1-6 0l-8 4c-3 1.5-5 4.5-5 8v4c0 4 3 7 7 7h2l-4 8c-1 2 0 4 2 5s4 0 5-2l6-12h4l6 12c1 2 3 3 5 2s3-3 2-5l-4-8h2c4 0 7-3 7-7v-4c0-3.5-2-6.5-5-8z"
                fill="currentColor"
            />
            {/* Dove wing */}
            <path
                d="M20 28c-6-2-12-1-16 3 6 0 10 3 12 7 1-4 3-7 4-10z"
                fill="currentColor"
                opacity="0.8"
            />
            {/* Dove head detail */}
            <circle cx="44" cy="24" r="2" fill="white" opacity="0.6" />
        </svg>
    );
}

export function DoveLogoFull({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--accent)" }}
            >
                <DoveIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Church of Grace Hymnal</span>
        </div>
    );
}
