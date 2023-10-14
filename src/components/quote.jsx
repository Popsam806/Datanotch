import React from "react";
import image from "../header.png";

import ScrollReveal from "scrollreveal";

export default class Quote extends React.Component {
  refs = React.createRef();
  componentDidMount() {
    const opac = {
      // origin: "left",
      opacity: 0.1,
      duration: 2000,
      delay: 300,
      scale: 1,
      easing: "ease",
    };
    ScrollReveal().reveal(this.refs.quote, opac);
  }

  render() {
    return (
      <div className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5"
          style={{
            maskImage:
              "linear-gradient(to bottom left, white 50%, transparent 60%)",
          }}
        >
          <rect
            width="100%"
            height="100%"
            fill="url(#R6aqlda)"
            strokeWidth="0"
          />
          <svg x="50%" y="-256" strokeWidth="0" className="overflow-visible">
            <path
              transform="translate(64 160)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(128 320)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(288 480)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(512 320)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(544 640)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
            <path
              transform="translate(320 800)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
            ></path>
          </svg>
          <defs>
            <pattern
              id="R6aqlda"
              width="96"
              height="480"
              x="50%"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(0 -256)"
              fill="none"
            >
              <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
            </pattern>
          </defs>
        </svg>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div style={{ opacity: 1, transform: "none" }}>
              <figure className="mx-auto max-w-4xl">
                <blockquote
                  className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl"
                  ref="quote"
                >
                  <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                    At DigixTech, we witness incredible transformations in our
                    students after they join us. It's like watching a
                    caterpillar turn into a magnificent butterfly, and we're
                    here to nurture that remarkable growth.
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt="Phobia"
                    loading="lazy"
                    width="184"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={image}
                  />
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
