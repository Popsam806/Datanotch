import { useState } from "react";
import Nav from "./nav";
import OtherInfo from "./otherinfo";
import image from '../header.png'
import { Link } from "react-router-dom";

export default function Header() {



  const headerStyles = {
    height: 'auto',
    transform: 'none',
    transformOrigin: '50% 50% 0rem',
  }

  let header_image_size = 100

  let [open , setOpen] = useState(false)

  return (
    <header>
      <div className="absolute left-0 right-0 top-2 z-40 pt-14" aria-hidden={open} inert={open}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="flex items-center justify-between">
              <Link to={'/'}>
                <img src={image} alt="" width={`${header_image_size +'px'}`} />
              </Link>
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
      <div id=":R5a:" style={!open ? { height: '0.5rem', transform: 'none', transformOrigin: '50% 50% 0rem' } : headerStyles} className="relative z-50 overflow-hidden bg-neutral-950 pt-2" aria-hidden={!open} inert={!open}>
        <div className="bg-neutral-800" style={{ transform: 'none', transformOrigin: '50% 50% 0rem' }}>
          <div className="bg-neutral-950 pb-16 pt-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="flex items-center justify-between">
                  <Link to={'/'}>
                    <img src={image} alt="" width={`${header_image_size +'px'}`} />
                  </Link>
                  <div className="flex items-center gap-x-8">
                    <a className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200" href="/contact">
                      <span className="relative top-px">Contact`` us</span>
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
