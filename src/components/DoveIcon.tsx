export default function DoveIcon({ className = "w-24 h-24", withText = false }: { className?: string; withText?: boolean }) {
    return (
        <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Circle */}
            {withText && (
                <circle cx="100" cy="100" r="100" fill="#1e3a5f" />
            )}

            {/* Dove Path - Centered and scaled */}
            <path
                d="M100 40c-15 0-28 5-39 13-26 22-43 17-61 17 0 35 25 65 60 75-5 10-10 22-10 35 0 25 15 45 35 55 3 2 7 3 10 5v10c0 3 2 5 5 5s5-2 5-5v-10c3-2 7-3 10-5 20-10 35-30 35-55 0-13-5-25-10-35 35-10 60-40 60-75-18 0-35 5-51 13-10-8-23-13-38-13h-10zm5 25c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z"
                fill="#c9a227"
                transform="translate(25, 25) scale(0.75)"
            />

            {/* Arched Text */}
            {withText && (
                <>
                    <path
                        id="textCurve"
                        d="M 30,100 A 70,70 0 0 1 170,100"
                        fill="none"
                    />
                    <text fill="#c9a227" fontSize="18" fontWeight="bold" fontFamily="serif" letterSpacing="2">
                        <textPath href="#textCurve" startOffset="50%" textAnchor="middle">
                            CHURCH OF GRACE HYMNS
                        </textPath>
                    </text>
                </>
            )}
        </svg>
    );
}
