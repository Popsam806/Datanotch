import React from "react";
import javascript from '../images/javascript.png'
import react from '../images/logo.svg'
import nodejs from '../images/node.png'

export default function Article() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex" style={{ opacity: 1, transform: "none" }}>
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <a href="/work/family-fund">
                  <span className="absolute inset-0 rounded-3xl"></span>
                  <img
                    alt="FamilyFund"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="h-16 w-16"
                    style={{ color: "transparent" }}
                    src={javascript}
                  />
                </a>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <time datetime="2023" className="font-semibold">
                  2023
                </time>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>Case study</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Learn to use javascript to make your page dynamic
              </p>
              <p className="mt-4 text-base text-neutral-600">
              JavaScript is a versatile programming language used for web development. It adds interactivity and functionality to websites, making them dynamic and user-friendly.
              </p>
            </article>
          </div>
          <div className="flex" style={{ opacity: 1, transform: "none" }}>
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <a href="/work/unseal">
                  <span className="absolute inset-0 rounded-3xl"></span>
                  <img
                    alt="Unseal"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="h-16 w-16"
                    style={{ color: "transparent" }}
                    src={react}
                  />
                </a>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <time datetime="2022" className="font-semibold">
                  2023
                </time>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>Case study</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Use React to build robust single page applications (SPA)
              </p>
              <p className="mt-4 text-base text-neutral-600">
              React is a popular JavaScript library for building dynamic and responsive user interfaces. It simplifies UI development by using reusable components, enhancing web app efficiency.
              </p>
            </article>
          </div>
          <div className="flex" style={{ opacity: 1, transform: "none" }}>
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <a href="/work/phobia">
                  <span className="absolute inset-0 rounded-3xl"></span>
                  <img
                    alt="Phobia"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="h-16 w-16"
                    style={{ color: "transparent" }}
                    src={nodejs}
                  />
                </a>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <time datetime="2022" className="font-semibold">
                  2023
                </time>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>Case study</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Build performant and scalable backend servers with NodeJs
              </p>
              <p className="mt-4 text-base text-neutral-600">
              Node.js is a runtime environment that allows server-side JavaScript execution. It's known for its non-blocking, event-driven architecture, making it ideal for scalable and efficient web applications.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
