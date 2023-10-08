import { useState } from "react";
import Nav from "./nav";
import OtherInfo from "./otherinfo";
import image from '../header.png'

export default function Header() {

    const headerStyles = {
        height: 'auto',
        transform: 'none',
        transformOrigin: '50% 50% 0px',
    }

    let header_image_size = 100

    let [open , setOpen] = useState(false)

  return (
    <header>
      <div className="absolute left-0 right-0 top-2 z-40 pt-14" aria-hidden={open} inert={open}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="flex items-center justify-between">
              {/* <a aria-label="Home" href="/">
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-8 sm:hidden"
                >
                  <rect
                    clip-path="url(#:R1ata:-clip)"
                    className="h-8 transition-all duration-300 fill-neutral-950 w-0 group-hover/logo:w-8"
                  ></rect>
                  <use
                    href="#:R1ata:-path"
                    className="stroke-neutral-950"
                    fill="none"
                    strokeWidth="1.5"
                  ></use>
                  <defs>
                    <path
                      id=":R1ata:-path"
                      d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                    ></path>
                    <clipPath id=":R1ata:-clip">
                      <use href="#:R1ata:-path"></use>
                    </clipPath>
                  </defs>
                </svg>
                <svg viewBox="0 0 130 32" aria-hidden="true" className="hidden h-8 sm:block">
                  <svg viewBox="0 0 32 32" aria-hidden="true" preserveAspectRatio="xMinYMid meet">
                    <rect
                      clip-path="url(#:R6ata:-clip)"
                      className="h-8 transition-all duration-300 fill-neutral-950 w-0 group-hover/logo:w-8"
                    ></rect>
                    <use
                      href="#:R6ata:-path"
                      className="stroke-neutral-950"
                      fill="none"
                      strokeWidth="1.5"
                    ></use>
                    <defs>
                      <path
                        id=":R6ata:-path"
                        d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                      ></path>
                      <clipPath id=":R6ata:-clip">
                        <use href="#:R6ata:-path"></use>
                      </clipPath>
                    </defs>
                  </svg>
                </svg>
              </a> */}
              <a aria-label="Home" href="/">
              <img src={image} alt="" width={`${header_image_size +'px'}`} />
              </a>
              <div className="flex items-center gap-x-8">
                <a className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800" href="/contact">
                  <span className="relative top-px">Contact us</span>
                </a>
                <button
                  onClick={()=>setOpen(open=> !open)}
                  type="button"
                  aria-expanded="false"
                  aria-controls=":R5a:"
                  className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10"
                  aria-label="Toggle navigation"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700">
                    <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id=":R5a:" style={!open?{ height: '0.5rem', transform: 'none', transformOrigin: '50% 50% 0px' }:headerStyles} className="relative z-50 overflow-hidden bg-neutral-950 pt-2" aria-hidden="true" inert="">
        <div className="bg-neutral-800" style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}>
          <div className="bg-neutral-950 pb-16 pt-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="flex items-center justify-between">
                <a aria-label="Home" href="/">
                <img src={image} alt="" width={`${header_image_size +'px'}`} />
              </a>
                  <div className="flex items-center gap-x-8">
                    <a className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200" href="/contact">
                      <span className="relative top-px">Contact us</span>
                    </a>
                    <button
                      type="button"
                      aria-expanded="false"
                      aria-controls=":R5a:"
                      className="group -m-2.5 rounded-full p-2.5 transition hover:bg-white/10"
                      aria-label="Toggle navigation"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-white group-hover:fill-neutral-200">
                        <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path>
                        <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Nav />
          <OtherInfo />
        </div>
      </div>
    </header>
  );
}
