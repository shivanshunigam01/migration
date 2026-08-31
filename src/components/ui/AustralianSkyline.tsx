import React from 'react'

/**
 * Ultra-light fine-line engraving style skyline reading left-to-right across Australia.
 * Groups: Sydney → landscape connectors → Melbourne → Brisbane → Perth
 * On mobile (≤768px via CSS class) only Sydney group + kangaroo are visible.
 */
const AustralianSkyline: React.FC = () => (
  <>
    <style>{`
      @media (max-width: 768px) {
        .au-skyline-mobile-hide { display: none; }
      }
    `}</style>
    {/* Full-width strip, tall enough for tallest element */}
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 220"
      preserveAspectRatio="xMidYMax meet"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        opacity: 0.55,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <defs>
        <style>{`
          .sky { fill: none; stroke: #1B2B5E; stroke-linecap: round; stroke-linejoin: round; }
          .sky-1   { stroke-width: 1; }
          .sky-1h  { stroke-width: 1.5; }
          .sky-fill { fill: #1B2B5E; stroke: none; }
        `}</style>
      </defs>

      {/* ─── GROUND LINE ─────────────────────────────────────────────────────── */}
      <line x1="0" y1="200" x2="1600" y2="200" className="sky sky-1" opacity="0.35"/>

      {/* ═══════════════════════════════════════════════════════════════════════
          1. SYDNEY GROUP  x: 30–360
          Harbour Bridge arch + deck + cables, Opera House sails, Sydney Tower
          ═══════════════════════════════════════════════════════════════════════ */}

      {/* — Sydney Harbour Bridge — */}
      {/* Left pylon */}
      <rect x="62" y="128" width="14" height="72" className="sky sky-1"/>
      {/* pylon top crenels */}
      <rect x="60" y="124" width="18" height="6" className="sky sky-1"/>
      <rect x="63" y="118" width="12" height="6" className="sky sky-1"/>

      {/* Right pylon */}
      <rect x="222" y="128" width="14" height="72" className="sky sky-1"/>
      <rect x="220" y="124" width="18" height="6" className="sky sky-1"/>
      <rect x="223" y="118" width="12" height="6" className="sky sky-1"/>

      {/* Bridge arch — parabola approximated with a cubic bezier */}
      <path d="M 69 148 Q 149 52 229 148" className="sky sky-1h" fill="none"/>

      {/* Bridge deck */}
      <line x1="40" y1="170" x2="258" y2="170" className="sky sky-1"/>

      {/* Hanger cables from arch down to deck — evenly spaced */}
      {[85,100,115,130,145,160,175,190,205,215].map((x, i) => {
        // arch y at this x: parabola with vertex at (149, 52), passing through (69,148)
        const t = (x - 69) / (229 - 69)
        const archY = 148 - 96 * 4 * t * (1 - t)
        return <line key={i} x1={x} y1={archY} x2={x} y2="170" className="sky sky-1" opacity="0.6"/>
      })}

      {/* Approach spans */}
      <line x1="20" y1="175" x2="62" y2="170" className="sky sky-1"/>
      <line x1="236" y1="170" x2="278" y2="175" className="sky sky-1"/>

      {/* — Sydney Opera House — x: 290–380 */}
      {/* Base platform */}
      <line x1="285" y1="200" x2="385" y2="200" className="sky sky-1"/>
      <line x1="285" y1="193" x2="385" y2="193" className="sky sky-1" opacity="0.5"/>
      {/* Large shell 1 */}
      <path d="M 295 193 Q 308 158 326 185" className="sky sky-1h" fill="none"/>
      {/* Large shell 2 */}
      <path d="M 310 193 Q 326 138 345 180" className="sky sky-1h" fill="none"/>
      {/* Smaller shells right side */}
      <path d="M 340 193 Q 350 162 362 185" className="sky sky-1" fill="none"/>
      <path d="M 352 193 Q 360 148 372 182" className="sky sky-1" fill="none"/>

      {/* — Sydney Tower — x: 390–410 */}
      {/* Tower shaft */}
      <rect x="397" y="80" width="8" height="120" className="sky sky-1"/>
      {/* Observation pod */}
      <rect x="391" y="72" width="20" height="14" rx="2" className="sky sky-1"/>
      {/* Turret top */}
      <rect x="395" y="60" width="12" height="14" className="sky sky-1"/>
      <line x1="401" y1="60" x2="401" y2="46" className="sky sky-1"/>
      {/* Antenna tip */}
      <line x1="401" y1="46" x2="401" y2="34" className="sky sky-1" opacity="0.5"/>

      {/* ═══════════════════════════════════════════════════════════════════════
          2. LANDSCAPE CONNECTORS  x: 420–680
          Eucalyptus trees, kangaroo, Uluru, windmill + fence
          ═══════════════════════════════════════════════════════════════════════ */}

      {/* — Eucalyptus tree 1 — x:440 */}
      <line x1="445" y1="200" x2="445" y2="148" className="sky sky-1"/>
      {/* Branches */}
      <line x1="445" y1="172" x2="433" y2="155" className="sky sky-1"/>
      <line x1="445" y1="165" x2="456" y2="150" className="sky sky-1"/>
      <line x1="433" y1="155" x2="427" y2="145" className="sky sky-1" opacity="0.6"/>
      <line x1="456" y1="150" x2="462" y2="142" className="sky sky-1" opacity="0.6"/>
      <line x1="445" y1="148" x2="438" y2="136" className="sky sky-1"/>
      <line x1="445" y1="148" x2="452" y2="138" className="sky sky-1"/>

      {/* — Eucalyptus tree 2 — x:468 */}
      <line x1="472" y1="200" x2="472" y2="152" className="sky sky-1"/>
      <line x1="472" y1="175" x2="461" y2="160" className="sky sky-1"/>
      <line x1="472" y1="168" x2="482" y2="155" className="sky sky-1"/>
      <line x1="472" y1="152" x2="465" y2="140" className="sky sky-1"/>
      <line x1="472" y1="152" x2="480" y2="143" className="sky sky-1"/>

      {/* — Fence line — x: 490–550 */}
      {[490,505,520,535,550].map((x, i) => (
        <line key={i} x1={x} y1="190" x2={x} y2="200" className="sky sky-1" opacity="0.5"/>
      ))}
      <line x1="490" y1="193" x2="550" y2="193" className="sky sky-1" opacity="0.5"/>
      <line x1="490" y1="197" x2="550" y2="197" className="sky sky-1" opacity="0.3"/>

      {/* — Windmill — x:570 */}
      <line x1="572" y1="200" x2="572" y2="148" className="sky sky-1"/>
      {/* Hub */}
      <circle cx="572" cy="147" r="3" className="sky sky-1"/>
      {/* 4 blades */}
      <line x1="572" y1="144" x2="572" y2="126" className="sky sky-1"/>
      <line x1="572" y1="150" x2="572" y2="168" className="sky sky-1"/>
      <line x1="569" y1="147" x2="552" y2="147" className="sky sky-1"/>
      <line x1="575" y1="147" x2="592" y2="147" className="sky sky-1"/>
      {/* Diagonal blades */}
      <line x1="570" y1="145" x2="558" y2="133" className="sky sky-1" opacity="0.6"/>
      <line x1="574" y1="149" x2="586" y2="161" className="sky sky-1" opacity="0.6"/>
      <line x1="574" y1="145" x2="586" y2="133" className="sky sky-1" opacity="0.6"/>
      <line x1="570" y1="149" x2="558" y2="161" className="sky sky-1" opacity="0.6"/>

      {/* — Uluru silhouette — x: 600–650 */}
      <path
        d="M 600 200 L 602 185 Q 610 172 620 168 Q 630 165 638 168 Q 646 172 648 182 L 650 200 Z" className="sky sky-1"
        fill="none"
      />

      {/* — Kangaroo mid-hop — x:660, anatomically graceful fine-line */}
      {/* Body */}
      <path d="M 662 183 Q 667 173 676 169 Q 684 166 690 170 Q 695 174 694 181" className="sky sky-1h" fill="none"/>
      {/* Head */}
      <path d="M 676 169 Q 675 160 679 157 Q 683 154 687 156 Q 690 159 689 164 Q 687 168 684 169" className="sky sky-1" fill="none"/>
      {/* Ear */}
      <path d="M 679 157 L 677 148 L 682 149" className="sky sky-1" fill="none"/>
      {/* Eye dot */}
      <circle cx="685" cy="159" r="1" className="sky-fill"/>
      {/* Tail */}
      <path d="M 662 183 Q 655 188 650 186 Q 646 184 648 180" className="sky sky-1" fill="none"/>
      {/* Front arms up (mid-hop) */}
      <path d="M 680 172 Q 674 165 670 162" className="sky sky-1" fill="none"/>
      <path d="M 682 173 Q 680 164 683 160" className="sky sky-1" fill="none"/>
      {/* Hind legs extended */}
      <path d="M 690 178 Q 697 190 702 196 L 706 198" className="sky sky-1h" fill="none"/>
      <path d="M 688 180 Q 692 193 694 200" className="sky sky-1" fill="none"/>

      {/* ═══════════════════════════════════════════════════════════════════════
          3. MELBOURNE GROUP  x: 720–920   class=au-skyline-mobile-hide
          Flinders Street Station dome, Eureka Tower, Arts Centre spire
          ═══════════════════════════════════════════════════════════════════════ */}

      {/* — Flinders Street Station — x: 720–830 */}
      <g className="au-skyline-mobile-hide">
        {/* Main building body */}
        <rect x="720" y="158" width="110" height="42" className="sky sky-1"/>
        {/* Central dome */}
        <path d="M 752 158 Q 775 132 798 158" className="sky sky-1h" fill="none"/>
        {/* Small dome left */}
        <path d="M 726 158 Q 734 148 742 158" className="sky sky-1" fill="none"/>
        {/* Small dome right */}
        <path d="M 806 158 Q 814 148 822 158" className="sky sky-1" fill="none"/>
        {/* Windows row */}
        {[730,746,762,778,794,810].map((x,i) => (
          <rect key={i} x={x} y="168" width="8" height="12" rx="1" className="sky sky-1" opacity="0.5"/>
        ))}
        {/* Clock */}
        <circle cx="775" cy="152" r="5" className="sky sky-1"/>
        {/* Entry arches */}
        <path d="M 734 200 L 734 182 Q 740 175 746 182 L 746 200" className="sky sky-1" opacity="0.6"/>
        <path d="M 800 200 L 800 182 Q 806 175 812 182 L 812 200" className="sky sky-1" opacity="0.6"/>

        {/* — Eureka Tower — x: 840–862 */}
        <rect x="840" y="60" width="22" height="140" className="sky sky-1"/>
        {/* Stepped tiers */}
        <rect x="836" y="120" width="30" height="4" className="sky sky-1"/>
        <rect x="837" y="90" width="28" height="4" className="sky sky-1" opacity="0.6"/>
        {/* Gold crown at top */}
        <rect x="838" y="52" width="26" height="10" className="sky sky-1h"/>
        <line x1="851" y1="52" x2="851" y2="38" className="sky sky-1"/>
        {/* Neighbouring tower */}
        <rect x="868" y="95" width="16" height="105" className="sky sky-1"/>
        <rect x="865" y="88" width="22" height="8" className="sky sky-1" opacity="0.5"/>

        {/* — Arts Centre spire — x: 890–910 */}
        <rect x="890" y="145" width="28" height="55" className="sky sky-1"/>
        {/* Spire */}
        <path d="M 890 145 L 904 62 L 918 145" className="sky sky-1h" fill="none"/>
        {/* Lattice rings on spire */}
        <ellipse cx="904" cy="102" rx="8" ry="3" className="sky sky-1" opacity="0.5"/>
        <ellipse cx="904" cy="118" rx="10" ry="3" className="sky sky-1" opacity="0.5"/>
        <ellipse cx="904" cy="132" rx="12" ry="3" className="sky sky-1" opacity="0.5"/>
      </g>

      {/* ═══════════════════════════════════════════════════════════════════════
          4. BRISBANE GROUP  x: 940–1120   class=au-skyline-mobile-hide
          Story Bridge + tower cluster
          ═══════════════════════════════════════════════════════════════════════ */}
      <g className="au-skyline-mobile-hide">
        {/* — Story Bridge — x: 940–1060 */}
        {/* Left pylon */}
        <rect x="948" y="140" width="12" height="60" className="sky sky-1"/>
        <rect x="946" y="136" width="16" height="6" className="sky sky-1"/>
        <rect x="949" y="128" width="10" height="10" className="sky sky-1"/>
        {/* Right pylon */}
        <rect x="1040" y="140" width="12" height="60" className="sky sky-1"/>
        <rect x="1038" y="136" width="16" height="6" className="sky sky-1"/>
        <rect x="1041" y="128" width="10" height="10" className="sky sky-1"/>
        {/* Main cable — catenary */}
        <path d="M 954 134 Q 1000 106 1046 134" className="sky sky-1h" fill="none"/>
        {/* Deck */}
        <line x1="930" y1="172" x2="1070" y2="172" className="sky sky-1"/>
        {/* Hangers */}
        {[966,980,994,1008,1022,1036].map((x, i) => {
          const t = (x - 954) / (1046 - 954)
          const cableY = 134 - 28 * 4 * t * (1 - t)
          return <line key={i} x1={x} y1={cableY} x2={x} y2="172" className="sky sky-1" opacity="0.55"/>
        })}
        {/* Approach spans */}
        <line x1="920" y1="176" x2="948" y2="172" className="sky sky-1"/>
        <line x1="1052" y1="172" x2="1080" y2="176" className="sky sky-1"/>

        {/* — Brisbane tower cluster — x: 1070–1130 */}
        <rect x="1072" y="110" width="20" height="90" className="sky sky-1"/>
        <rect x="1097" y="130" width="16" height="70" className="sky sky-1"/>
        <rect x="1118" y="95" width="18" height="105" className="sky sky-1"/>
        <rect x="1115" y="88" width="24" height="8" rx="1" className="sky sky-1" opacity="0.5"/>
        <line x1="1127" y1="88" x2="1127" y2="72" className="sky sky-1"/>
      </g>

      {/* ═══════════════════════════════════════════════════════════════════════
          5. PERTH GROUP  x: 1160–1360   class=au-skyline-mobile-hide
          Bell tower + skyline cluster
          ═══════════════════════════════════════════════════════════════════════ */}
      <g className="au-skyline-mobile-hide">
        {/* — Perth Bell Tower — x: 1160–1185 */}
        {/* Base */}
        <rect x="1162" y="175" width="24" height="25" className="sky sky-1"/>
        {/* Tapered shaft */}
        <path d="M 1162 175 L 1166 100 L 1180 100 L 1184 175 Z" className="sky sky-1"/>
        {/* Spire */}
        <path d="M 1166 100 L 1173 62 L 1180 100" className="sky sky-1h" fill="none"/>
        {/* Bell openings */}
        <rect x="1167" y="130" width="4" height="10" rx="2" className="sky sky-1" opacity="0.5"/>
        <rect x="1175" y="130" width="4" height="10" rx="2" className="sky sky-1" opacity="0.5"/>

        {/* — Perth tower cluster — x: 1200–1360 */}
        <rect x="1200" y="115" width="22" height="85" className="sky sky-1"/>
        <rect x="1197" y="108" width="28" height="8" rx="1" className="sky sky-1" opacity="0.6"/>
        <line x1="1211" y1="108" x2="1211" y2="90" className="sky sky-1"/>

        <rect x="1228" y="128" width="18" height="72" className="sky sky-1"/>
        <rect x="1226" y="122" width="22" height="7" rx="1" className="sky sky-1" opacity="0.5"/>

        <rect x="1252" y="100" width="24" height="100" className="sky sky-1"/>
        <rect x="1249" y="93" width="30" height="8" rx="1" className="sky sky-1"/>
        <line x1="1264" y1="93" x2="1264" y2="78" className="sky sky-1"/>

        <rect x="1284" y="118" width="20" height="82" className="sky sky-1"/>
        <rect x="1282" y="112" width="24" height="7" rx="1" className="sky sky-1" opacity="0.5"/>

        <rect x="1312" y="132" width="16" height="68" className="sky sky-1"/>
        <rect x="1334" y="145" width="18" height="55" className="sky sky-1"/>

        {/* — Second kangaroo silhouette far right — subtle */}
        <path d="M 1380 192 Q 1383 185 1390 182 Q 1396 179 1401 182 Q 1405 186 1404 192" className="sky sky-1" fill="none" opacity="0.5"/>
        <path d="M 1390 182 Q 1389 175 1392 173 Q 1395 171 1398 173 Q 1400 175 1399 179 Q 1397 182 1395 182" className="sky sky-1" fill="none" opacity="0.5"/>
        <path d="M 1380 192 Q 1376 196 1372 195 Q 1369 193 1371 190" className="sky sky-1" fill="none" opacity="0.5"/>
        <path d="M 1402 188 Q 1408 195 1411 199" className="sky sky-1" fill="none" opacity="0.5"/>
      </g>
    </svg>
  </>
)

export default AustralianSkyline
