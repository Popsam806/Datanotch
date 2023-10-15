import React, { useEffect, useRef } from "react";
import image from "../laptop.webp";
import ScrollReveal from "scrollreveal";

export default function Sercices() {
  const img = useRef();
  const group = useRef();
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(img.current, {
      origin: "left",
      duration: 1000,
      delay: 150,
      distance: "10rem",
      scale: 1,
      easing: "ease",
    },
    sr.reveal(group.current, {
      origin: "right",
      duration: 1000,
      delay: 150,
      distance: "10rem",
      scale: 1,
      easing: "ease",
    }))

    return () => {
      sr.clean(img.current);
      sr.clean(group.current);
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div
            className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12"
            ref={img}
          >
            <div
              className="w-[33.75rem] flex-none lg:w-[45rem]"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="justify-center lg:justify-end relative flex aspect-[719/680] w-full grayscale">
                <img
                  alt=""
                  loading="lazy"
                  width="2400"
                  height="3000"
                  decoding="async"
                  data-nimg="1"
                  className="w-full bg-neutral-100 object-cover"
                  style={{ color: "transparent", aspectRatio: "655/680" }}
                  sizes="(min-width: 64rem) 41rem, 31rem"
                  src={image}
                />
              </div>
            </div>
          </div>
          <div>
            <ul
              role="list"
              className="text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4"
              ref={group}
            >
              <li className="group mt-10 first:mt-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">
                      Web development.{" "}
                    </strong>
                    We specialize in imparting the skills needed to create
                    captivating, high-quality marketing pages, all while
                    ensuring the entire website is engaging and fully
                    functional.{" "}
                  </div>
                </div>
              </li>
              <li className="group mt-10 first:mt-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">
                      Software development.{" "}
                    </strong>
                    We're dedicated to teaching you all about software
                    development. Our team of skilled developers excels in the
                    latest app frameworks.
                  </div>
                </div>
              </li>
              <li className="group mt-10 first:mt-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">
                      Data analysis.{" "}
                    </strong>
                    We're committed to helping you excel in data analysis with
                    Python. Our expert team will guide you effectively in
                    mastering this field.{" "}
                  </div>
                </div>
              </li>
              <li className="group mt-10 first:mt-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">
                      Custom content management.{" "}
                    </strong>
                    At Digixtech, we're dedicated to helping you harness the
                    full potential of custom content management. Count on our
                    expert team to guide you effectively in mastering this
                    topic.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
