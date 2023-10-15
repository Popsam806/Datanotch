import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

export default function Footer() {
  const opac = useRef();
  const opac2 = useRef();
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(opac.current, {
      duration: 2000,
      delay: 300,
      scale: .8,
      left: "3rem",
      opacity: 0.5,
      easing: "ease",
    },
    sr.reveal(opac2.current, {
      duration: 2000,
      delay: 300,
      scale: .8,
      left: "3rem",
      opacity: 0.5,
      easing: "ease",
    }))

  }, []);

  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <nav ref={opac}>
            <ul
              role="list"
              className="grid grid-cols-2 gap-8 sm:grid-cols-3"
              
            >
              <li>
                <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                  Services
                </div>
                <ul role="list" className="mt-4 text-sm text-neutral-700">
                  <li className="mt-4">
                    <a
                      className="transition hover:text-neutral-950"
                      href="/work/family-fund"
                    >
                      Web design
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      className="transition hover:text-neutral-950"
                      href="/work/unseal"
                    >
                      Software development
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      className="transition hover:text-neutral-950"
                      href="/work/phobia"
                    >
                      Web development
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      className="transition hover:text-neutral-950"
                      href="/work"
                    >
                      See all <span aria-hidden="true">→</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* More list items */}
            </ul>
          </nav>
          <div className="flex lg:justify-end">
            <form className="max-w-sm" ref={opac2}>
              <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                Sign up for our newsletter
              </h2>
              <p className="mt-4 text-sm text-neutral-700">
                Subscribe to get the latest design news, articles, resources,
                and inspiration.
              </p>
              <div className="relative mt-6">
                <input
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  aria-label="Email address"
                  className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                  >
                    <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <a aria-label="Home" href="/">
            {/* Your logo SVG */}
          </a>
          <p className="text-sm text-neutral-700">
            © Digixtech Agency Inc. 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
