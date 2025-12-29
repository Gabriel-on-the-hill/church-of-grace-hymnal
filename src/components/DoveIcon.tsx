export default function DoveIcon({ className = "w-24 h-24", withText = false }: { className?: string; withText?: boolean }) {
    return (
        <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project Icon */}
            <image
                href="/icon-512.png"
                x="0"
                y="0"
                width="200"
                height="200"
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
