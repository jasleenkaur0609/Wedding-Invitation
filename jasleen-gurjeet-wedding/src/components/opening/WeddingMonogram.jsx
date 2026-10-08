// src/components/opening/WeddingMonogram.jsx

function WeddingMonogram() {
  return (
    <div className="floral-monogram" aria-label="J and G monogram">
      <svg
        viewBox="0 0 500 260"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="monogramGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f3dfaa" />
            <stop offset="38%" stopColor="#c6a15b" />
            <stop offset="70%" stopColor="#ead18f" />
            <stop offset="100%" stopColor="#9b7335" />
          </linearGradient>

          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left floral vine */}
        <path
          className="vine vine-left"
          d="M62 218 C18 180 35 124 80 110 C119 98 134 63 110 34"
        />

        {/* Right floral vine */}
        <path
          className="vine vine-right"
          d="M438 218 C482 180 465 124 420 110 C381 98 366 63 390 34"
        />

        {/* Main J */}
        <path
          className="letter letter-j"
          d="
            M190 54
            C225 38 263 45 276 65
            C287 82 278 104 263 119
            C244 138 222 151 208 169
            C194 187 190 207 205 220
            C222 234 251 227 267 208
          "
        />

        {/* Main G */}
        <path
          className="letter letter-g"
          d="
            M316 59
            C286 42 250 49 236 73
            C220 101 229 137 252 160
            C274 181 304 187 328 172
            C346 161 353 141 347 123
            C340 103 317 99 296 108
            L329 108
            L348 127
          "
        />

        {/* Intertwining center vine */}
        <path
          className="center-vine"
          d="
            M249 211
            C274 190 287 166 284 142
            C281 119 264 100 249 82
            C237 67 235 49 246 33
          "
        />

        {/* Left leaves */}
        <g className="leaf-set">
          <ellipse cx="76" cy="161" rx="8" ry="18" transform="rotate(-48 76 161)" />
          <ellipse cx="52" cy="139" rx="8" ry="18" transform="rotate(58 52 139)" />
          <ellipse cx="91" cy="94" rx="8" ry="18" transform="rotate(-55 91 94)" />
          <ellipse cx="111" cy="67" rx="8" ry="17" transform="rotate(55 111 67)" />
        </g>

        {/* Right leaves */}
        <g className="leaf-set">
          <ellipse cx="424" cy="161" rx="8" ry="18" transform="rotate(48 424 161)" />
          <ellipse cx="448" cy="139" rx="8" ry="18" transform="rotate(-58 448 139)" />
          <ellipse cx="409" cy="94" rx="8" ry="18" transform="rotate(55 409 94)" />
          <ellipse cx="389" cy="67" rx="8" ry="17" transform="rotate(-55 389 67)" />
        </g>

        {/* Floral blossoms */}
        <g className="flower flower-one">
          <circle cx="105" cy="36" r="7" />
          <circle cx="92" cy="39" r="7" />
          <circle cx="111" cy="49" r="7" />
          <circle cx="98" cy="52" r="7" />
          <circle className="flower-core" cx="101" cy="44" r="5" />
        </g>

        <g className="flower flower-two">
          <circle cx="395" cy="36" r="7" />
          <circle cx="408" cy="39" r="7" />
          <circle cx="389" cy="49" r="7" />
          <circle cx="402" cy="52" r="7" />
          <circle className="flower-core" cx="399" cy="44" r="5" />
        </g>

        {/* Small central flower */}
        <g className="flower flower-center">
          <circle cx="248" cy="30" r="6" />
          <circle cx="236" cy="35" r="6" />
          <circle cx="258" cy="35" r="6" />
          <circle cx="248" cy="43" r="6" />
          <circle className="flower-core" cx="248" cy="36" r="4" />
        </g>
      </svg>

      <div className="monogram-caption">
        JASLEEN <span>·</span> GURJEET
      </div>
    </div>
  );
}

export default WeddingMonogram;