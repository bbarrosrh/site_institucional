import { useEffect, useRef } from "react";

const VIEW_W = 611;
const VIEW_H = 485;
const DRIFT_TAU = 0.2;
const MAX_SHIFT = 64;

export function BannerDecoration({ className }: { className?: string }) {
  const bookRingGradientRef = useRef<SVGLinearGradientElement>(null);
  const bookIconGradientRef = useRef<SVGLinearGradientElement>(null);
  const briefcaseRingGradientRef = useRef<SVGLinearGradientElement>(null);
  const briefcaseIconGradientRef = useRef<SVGLinearGradientElement>(null);
  const compassRingGradientRef = useRef<SVGLinearGradientElement>(null);
  const compassIconGradientRef = useRef<SVGLinearGradientElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const gradientRefs = [
      bookRingGradientRef,
      bookIconGradientRef,
      briefcaseRingGradientRef,
      briefcaseIconGradientRef,
      compassRingGradientRef,
      compassIconGradientRef,
    ];

    let target = 0;
    let current = 0;
    let rafId = 0;
    let lastTime: number | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;
      target = normalizedY * MAX_SHIFT;
    };

    const tick = (time: number) => {
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const alpha = 1 - Math.exp(-dt / DRIFT_TAU);
      current += (target - current) * alpha;

      const transform = `translate(0 ${current})`;
      for (const ref of gradientRefs) {
        ref.current?.setAttribute("gradientTransform", transform);
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <svg
      className={className}
      width={VIEW_W}
      height={VIEW_H}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="88" cy="64" r="61" stroke="url(#paint1_linear_183_456)" strokeWidth="6" />
        <g clipPath="url(#clip0_183_456)">
          <g filter="url(#filter0_d_183_456)">
            <path
              d="M113.333 45.6906C113.692 45.898 113.998 46.1863 114.227 46.5325C114.455 46.8788 114.599 47.2735 114.648 47.6853L114.667 48V82.6666C114.667 83.1347 114.543 83.5946 114.309 84C114.075 84.4053 113.739 84.742 113.333 84.976C112.928 85.21 112.468 85.3333 112 85.3332C111.532 85.3332 111.072 85.21 110.667 84.976C107.645 83.2313 104.242 82.2543 100.755 82.1306C97.2681 82.0069 93.8042 82.7404 90.6666 84.2666V43.8026C94.3503 42.4267 98.2927 41.8824 102.211 42.2088C106.13 42.5352 109.928 43.7242 113.333 45.6906ZM85.3333 43.8053L85.336 84.2693C82.3221 82.8021 79.0049 82.0658 75.6534 82.12C72.3018 82.1742 69.0102 83.0174 66.0453 84.5813L65.1733 85.0613L64.8986 85.1786L64.768 85.2213L64.4746 85.2906L64.312 85.3173L64 85.3333H63.888L63.5946 85.3013L63.3893 85.264L63.1013 85.1786L62.7653 85.0293L62.512 84.88L62.2746 84.7013L62.1146 84.552L61.92 84.3333L61.7493 84.096L61.6906 84L61.6053 83.84L61.488 83.5653L61.4453 83.4346L61.376 83.1413L61.3493 82.9786L61.3386 82.848L61.3333 48C61.3333 47.5319 61.4565 47.0721 61.6906 46.6667C61.9246 46.2613 62.2613 45.9247 62.6666 45.6906C66.0721 43.7246 69.8702 42.5361 73.7889 42.2102C77.7076 41.8842 81.6498 42.4289 85.3333 43.8053Z"
              fill="url(#paint0_linear_183_456)"
            />
          </g>
        </g>
      </g>

      <g>
        <circle cx="48" cy="210" r="46" stroke="url(#paint3_linear_183_456)" strokeWidth="4" />
        <g clipPath="url(#clip1_183_456)">
          <g filter="url(#filter1_d_183_456)">
            <path
              d="M68 212.956V222C68 223.591 67.3679 225.117 66.2426 226.243C65.1174 227.368 63.5913 228 62 228H34C32.4087 228 30.8826 227.368 29.7574 226.243C28.6321 225.117 28 223.591 28 222V212.956L29.106 213.51C34.9678 216.463 41.44 218 48.0035 218C54.5669 217.999 61.0388 216.46 66.9 213.506L68 212.956ZM52 190C53.5913 190 55.1174 190.632 56.2426 191.757C57.3679 192.883 58 194.409 58 196V198H62C63.5913 198 65.1174 198.632 66.2426 199.757C67.3679 200.883 68 202.409 68 204V208.484L65.106 209.932C59.928 212.542 54.2214 213.932 48.4231 213.997C42.6249 214.061 36.8888 212.798 31.654 210.304L30.36 209.664L28 208.484V204C28 202.409 28.6321 200.883 29.7574 199.757C30.8826 198.632 32.4087 198 34 198H38V196C38 194.409 38.6321 192.883 39.7574 191.757C40.8826 190.632 42.4087 190 44 190H52ZM48 206C47.4696 206 46.9609 206.211 46.5858 206.586C46.2107 206.961 46 207.47 46 208C45.9987 208.263 46.0491 208.523 46.1484 208.766C46.2477 209.009 46.3939 209.23 46.5787 209.417C46.7635 209.604 46.9832 209.752 47.2254 209.854C47.4675 209.956 47.7274 210.009 47.99 210.01C48.2526 210.011 48.513 209.961 48.7561 209.862C48.9993 209.762 49.2205 209.616 49.4071 209.431C49.5938 209.246 49.7422 209.027 49.8439 208.785C49.9457 208.542 49.9987 208.283 50 208.02C50 206.896 49.104 206 48 206ZM52 194H44C43.4696 194 42.9609 194.211 42.5858 194.586C42.2107 194.961 42 195.47 42 196V198H54V196C54 195.47 53.7893 194.961 53.4142 194.586C53.0391 194.211 52.5304 194 52 194Z"
              fill="url(#paint4_linear_183_456)"
            />
          </g>
        </g>
      </g>

      <g>
        <circle cx="375" cy="249" r="232" stroke="url(#paint2_linear_183_456)" strokeWidth="8" />
        <g filter="url(#filter2_d_183_456)">
          <path
            d="M293.407 357.594L419.139 309.255C422.788 307.865 426.101 305.72 428.863 302.96C431.624 300.2 433.77 296.889 435.161 293.242L483.523 167.572C485.03 163.784 485.393 159.639 484.569 155.647C483.745 151.656 481.77 147.993 478.886 145.111C476.003 142.229 472.338 140.254 468.344 139.43C464.351 138.607 460.203 138.97 456.414 140.476L330.791 188.896C327.145 190.304 323.833 192.458 321.07 195.22C318.306 197.983 316.151 201.292 314.742 204.937L266.407 330.607C264.947 334.377 264.615 338.491 265.45 342.446C266.286 346.402 268.254 350.03 271.114 352.889C273.974 355.748 277.604 357.715 281.562 358.55C285.52 359.385 289.635 359.053 293.407 357.594ZM374.951 221.221C380.471 221.216 385.868 222.847 390.459 225.909C395.051 228.97 398.63 233.325 400.745 238.42C402.86 243.516 403.415 249.124 402.339 254.535C401.264 259.946 398.606 264.917 394.703 268.818C390.801 272.719 385.828 275.375 380.414 276.45C375 277.525 369.389 276.97 364.291 274.857C359.193 272.743 354.836 269.165 351.773 264.576C348.71 259.987 347.078 254.592 347.083 249.076C347.08 245.417 347.798 241.793 349.197 238.412C350.597 235.031 352.649 231.959 355.238 229.372C357.826 226.784 360.9 224.733 364.283 223.334C367.665 221.936 371.291 221.218 374.951 221.221Z"
            fill="url(#paint5_linear_183_456)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_183_456"
          x="53.3333"
          y="34.1168"
          width="69.3333"
          height="60.7166"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow dx="0" dy="1.5" stdDeviation="0" floodColor="#FFF5E2" floodOpacity="1" />
        </filter>
        <filter
          id="filter1_d_183_456"
          x="20"
          y="182"
          width="56"
          height="55.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow dx="0" dy="1.5" stdDeviation="0" floodColor="#FFF5E2" floodOpacity="1" />
        </filter>
        <filter
          id="filter2_d_183_456"
          x="253"
          y="127"
          width="244"
          height="249"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow dx="0" dy="5" stdDeviation="0" floodColor="#FFF5E2" floodOpacity="1" />
        </filter>

        <linearGradient
          ref={bookIconGradientRef}
          id="paint0_linear_183_456"
          x1="79.4379"
          y1="46.3982"
          x2="86.9478"
          y2="80.9943"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5845A" />
          <stop offset="0.0919" stopColor="#BA9D71" />
          <stop offset="0.239" stopColor="#D8BF91" />
          <stop offset="0.3187" stopColor="#E3CC9D" />
          <stop offset="0.470652" stopColor="#E1CA9B" />
          <stop offset="0.471215" stopColor="#B39864" />
          <stop offset="0.6262" stopColor="#967941" />
          <stop offset="0.6957" stopColor="#8B6D34" />
          <stop offset="0.7947" stopColor="#8E6F38" />
          <stop offset="0.893" stopColor="#967744" />
          <stop offset="0.9907" stopColor="#A38358" />
          <stop offset="1" stopColor="#A5845A" />
        </linearGradient>
        <linearGradient
          ref={bookRingGradientRef}
          id="paint1_linear_183_456"
          x1="53.8471"
          y1="33.1694"
          x2="88.2465"
          y2="115.158"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5845A" />
          <stop offset="0.0919" stopColor="#BA9D71" />
          <stop offset="0.239" stopColor="#D8BF91" />
          <stop offset="0.3187" stopColor="#E3CC9D" />
          <stop offset="0.456631" stopColor="#E1CA9B" />
          <stop offset="0.471215" stopColor="#B39864" />
          <stop offset="0.6262" stopColor="#967941" />
          <stop offset="0.6957" stopColor="#8B6D34" />
          <stop offset="0.7947" stopColor="#8E6F38" />
          <stop offset="0.893" stopColor="#967744" />
          <stop offset="0.9907" stopColor="#A38358" />
          <stop offset="1" stopColor="#A5845A" />
        </linearGradient>
        <linearGradient
          ref={compassRingGradientRef}
          id="paint2_linear_183_456"
          x1="249.061"
          y1="135.312"
          x2="375.909"
          y2="437.644"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5845A" />
          <stop offset="0.0919" stopColor="#BA9D71" />
          <stop offset="0.239" stopColor="#D8BF91" />
          <stop offset="0.3187" stopColor="#E3CC9D" />
          <stop offset="0.456631" stopColor="#E1CA9B" />
          <stop offset="0.471215" stopColor="#B39864" />
          <stop offset="0.6262" stopColor="#967941" />
          <stop offset="0.6957" stopColor="#8B6D34" />
          <stop offset="0.7947" stopColor="#8E6F38" />
          <stop offset="0.893" stopColor="#967744" />
          <stop offset="0.9907" stopColor="#A38358" />
          <stop offset="1" stopColor="#A5845A" />
        </linearGradient>
        <linearGradient
          ref={briefcaseRingGradientRef}
          id="paint3_linear_183_456"
          x1="22.3854"
          y1="186.877"
          x2="48.1849"
          y2="248.368"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5845A" />
          <stop offset="0.0919" stopColor="#BA9D71" />
          <stop offset="0.239" stopColor="#D8BF91" />
          <stop offset="0.3187" stopColor="#E3CC9D" />
          <stop offset="0.456631" stopColor="#E1CA9B" />
          <stop offset="0.471215" stopColor="#B39864" />
          <stop offset="0.6262" stopColor="#967941" />
          <stop offset="0.6957" stopColor="#8B6D34" />
          <stop offset="0.7947" stopColor="#8E6F38" />
          <stop offset="0.893" stopColor="#967744" />
          <stop offset="0.9907" stopColor="#A38358" />
          <stop offset="1" stopColor="#A5845A" />
        </linearGradient>
        <linearGradient
          ref={briefcaseIconGradientRef}
          id="paint4_linear_183_456"
          x1="41.5784"
          y1="193.765"
          x2="49.1919"
          y2="223.681"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5845A" />
          <stop offset="0.0919" stopColor="#BA9D71" />
          <stop offset="0.239" stopColor="#D8BF91" />
          <stop offset="0.3187" stopColor="#E3CC9D" />
          <stop offset="0.470652" stopColor="#E1CA9B" />
          <stop offset="0.471215" stopColor="#B39864" />
          <stop offset="0.6262" stopColor="#967941" />
          <stop offset="0.6957" stopColor="#8B6D34" />
          <stop offset="0.7947" stopColor="#8E6F38" />
          <stop offset="0.893" stopColor="#967744" />
          <stop offset="0.9907" stopColor="#A38358" />
          <stop offset="1" stopColor="#A5845A" />
        </linearGradient>
        <linearGradient
          ref={compassIconGradientRef}
          id="paint5_linear_183_456"
          x1="328.5"
          y1="187"
          x2="390.83"
          y2="336.497"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A5845A" />
          <stop offset="0.0919" stopColor="#BA9D71" />
          <stop offset="0.239" stopColor="#D8BF91" />
          <stop offset="0.3187" stopColor="#E3CC9D" />
          <stop offset="0.470652" stopColor="#E1CA9B" />
          <stop offset="0.471215" stopColor="#B39864" />
          <stop offset="0.6262" stopColor="#967941" />
          <stop offset="0.6957" stopColor="#8B6D34" />
          <stop offset="0.7947" stopColor="#8E6F38" />
          <stop offset="0.893" stopColor="#967744" />
          <stop offset="0.9907" stopColor="#A38358" />
          <stop offset="1" stopColor="#A5845A" />
        </linearGradient>

        <clipPath id="clip0_183_456">
          <rect width="64" height="64" fill="white" transform="translate(56 32)" />
        </clipPath>
        <clipPath id="clip1_183_456">
          <rect width="48" height="48" fill="white" transform="translate(24 186)" />
        </clipPath>
      </defs>
    </svg>
  );
}
