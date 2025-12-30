export default function DoveIcon({ className = "w-24 h-24", withText = false }: { className?: string; withText?: boolean }) {
    if (!withText) {
        // Render a rounded image for the icon-only view to prevent "white square" corners
        // if the source image has a background.
        return (
            <img
                src="/icon-512.png"
                alt="Church of Grace Dove Icon"
                className={`${className} rounded-full object-cover`}
            />
        );
    }

    return (
        <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project Icon */}
            {/* Note: In SVG, we can't easily clip to circle without defs/clipPath, 
                so we rely on the image being transparent or accept the square in SVG mode (Splash Screen) */}
            <image
                href="/icon-512.png"
                x="0"
                y="0"
                width="200"
                height="200"
            />

            {/* Arched Text */}
            <>
                <path
                    id="textCurve"
                    d="M 22,100 A 78,78 0 0 1 178,100"
                    fill="none"
                />
                <text fill="#c9a227" fontSize="18" fontWeight="bold" fontFamily="serif">
                    <textPath href="#textCurve" startOffset="50%" textAnchor="middle">
                        CHURCH OF GRACE HYMNS
                    </textPath>
                </text>
            </>
        </svg>
    );
}
