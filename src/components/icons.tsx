import type { SVGProps } from "react";

export const ChickenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18.06 12.37c-.33-1.63-.9-3.14-1.7-4.37.54-.7.84-1.55.84-2.5 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .95.3 1.8.84 2.5-1.42 2.29-2.16 5.03-2.16 8.13 0 .28.22.5.5.5h12c.28 0 .5-.22.5-.5 0-2.26-.5-4.32-1.32-6.13Z" />
    <path d="M7.84 21.5c.34-.63.9-1.5 1.66-1.5 1.33 0 2.22 1.03 2.5 1.5" />
    <path d="M4.24 14.5c.3-.63.8-1.5 1.56-1.5 1.23 0 2.12 1.03 2.4 1.5" />
    <path d="M15.76 14.5c.3-.63.8-1.5 1.56-1.5 1.23 0 2.12 1.03 2.4 1.5" />
  </svg>
);

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.4 17.29C8.94 16.71 8 15.23 8 13.5C8 11.57 9.57 10 11.5 10C12.16 10 12.77 10.18 13.29 10.5C13.82 9.06 15.22 8 16.9 8C18.83 8 20.4 9.57 20.4 11.5C20.4 13.23 19.46 14.71 18 15.29C18 17.23 16.23 19 14.2 19C12.18 19 10.4 18.27 10.4 17.29Z" />
  </svg>
);
