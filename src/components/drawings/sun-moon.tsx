interface SunSVGProps {
    width: string;
    height: string;
}
  
export const SunSVG = ({ width, height }: SunSVGProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 329 350" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="164.5" cy="174.5" rx="76.5" ry="71.5" fill="#EAB308"/>
        <path d="M123.178 157.245C123.178 156.196 124.84 154.591 125.625 153.904C127.737 152.056 131.07 151.171 133.809 151.171C139.307 151.171 143.836 152.693 147.781 156.638" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        <path d="M181 157.075C181 156.026 182.662 154.42 183.447 153.734C185.559 151.885 188.892 151 191.631 151C197.128 151 201.658 152.522 205.603 156.467" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        <path d="M126 189C131.5 223.53 179.968 231.593 203 189" stroke="black" strokeWidth="3"/>
        <rect x="159" width="11" height="90" rx="5" fill="#EAB308"/>
        <rect x="318.076" y="82" width="11" height="90" rx="5" transform="rotate(60 318.076 82)" fill="#EAB308"/>
        <rect x="238.643" y="35.5584" width="11" height="70" rx="5" transform="rotate(30 238.643 35.5584)" fill="#EAB308"/>
        <rect width="11.0015" height="90.0374" rx="5" transform="matrix(-0.500208 0.865905 0.866145 0.499792 5.50305 82.4417)" fill="#EAB308"/>
        <rect width="11.0046" height="70.0097" rx="5" transform="matrix(-0.866145 0.499792 0.500208 0.865906 84.9806 36)" fill="#EAB308"/>
        <rect x="324" y="169" width="11" height="70" rx="5" transform="rotate(90 324 169)" fill="#EAB308"/>
        <rect width="11.3333" height="90" rx="5" transform="matrix(1 0 0 -1 159 350)" fill="#EAB308"/>
        <rect width="11.0843" height="92.053" rx="5" transform="matrix(0.511235 -0.859441 -0.872369 -0.488849 322.897 267)" fill="#EAB308"/>
        <rect width="11.2509" height="70.5363" rx="5" transform="matrix(0.872369 -0.488849 -0.511235 -0.859441 241.056 313.442)" fill="#EAB308"/>
        <rect width="11" height="72.1212" rx="5" transform="matrix(0 -1 -1 0 329 180)" fill="#EAB308"/>
        <rect x="170" y="350" width="11.3333" height="90" rx="5" transform="rotate(-180 170 350)" fill="#EAB308"/>
        <rect width="11.0843" height="92.053" rx="5" transform="matrix(-0.511235 -0.859441 0.872369 -0.488849 6.10321 267)" fill="#EAB308"/>
        <rect width="11.2509" height="70.5363" rx="5" transform="matrix(-0.872369 -0.488849 0.511235 -0.859441 87.9439 313.442)" fill="#EAB308"/>
        <rect y="180" width="11" height="72.1212" rx="5" transform="rotate(-90 0 180)" fill="#EAB308"/>
        </svg>         
    );
};

interface MoonSVGProps {
    width: string;
    height: string;
}
  
export const MoonSVG = ({ width, height }: MoonSVGProps) => {
    return (
    <svg width={width} height={height} viewBox="0 0 470 620" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="10" width="447" height="600" fill="#111827"/>
    <g filter="url(#filter0_d_20_30)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 544.545C33.5747 546.769 47.5045 547.925 61.7018 547.925C204.304 547.925 319.905 431.311 319.905 287.46C319.905 164.866 235.945 62.0545 122.866 34.3458C138.794 31.4901 155.191 30 171.935 30C325.506 30 450 155.36 450 310C450 464.64 325.506 590 171.935 590C115.866 590 63.6733 573.29 20.0001 544.545Z" fill="#E5E7EB"/>
    </g>
    <g filter="url(#filter1_d_20_30)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 544.545C33.5747 546.769 47.5045 547.925 61.7018 547.925C204.304 547.925 319.905 431.311 319.905 287.46C319.905 164.866 235.945 62.0545 122.866 34.3458C138.794 31.4901 155.191 30 171.935 30C325.506 30 450 155.36 450 310C450 464.64 325.506 590 171.935 590C115.866 590 63.6733 573.29 20.0001 544.545Z" fill="#E5E7EB"/>
    </g>
    <defs>
    <filter id="filter0_d_20_30" x="0" y="0" width="470" height="600" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="-10"/>
    <feGaussianBlur stdDeviation="10"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_30"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_30" result="shape"/>
    </filter>
    <filter id="filter1_d_20_30" x="0" y="20" width="470" height="600" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="10"/>
    <feGaussianBlur stdDeviation="10"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_30"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_30" result="shape"/>
    </filter>
    </defs>
    </svg>    
    )
}
