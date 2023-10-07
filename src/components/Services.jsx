import React from "react";
import image from '../laptop.webp'


export default function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <div className="w-[33.75rem] flex-none lg:w-[45rem]" style={{ opacity: 1, transform: "none" }}>
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
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  src={image}
                />
              </div>
            </div>
          </div>
          <div>
            <ul role="list" className="text-base text-neutral-600 mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
              <li className="group mt-10 first:mt-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">Web development. </strong>
                    We specialize in crafting beautiful, high-quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere.
                  </div>
                </div>
              </li>
              <li className="group mt-10 first:mt-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">Application development. </strong>
                    We have a team of skilled developers who are experts in the latest app frameworks, like Angular 1 and Google Web Toolkit.
                  </div>
                </div>
              </li>
              <li className="group mt-10 first:mt-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">E-commerce. </strong>
                    We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we’ve used for the past six years.
                  </div>
                </div>
              </li>
              <li className="group mt-10 first:mt-0">
                <div style={{ opacity: 1, transform: "none" }}>
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">Custom content management. </strong>
                    At Studio, we understand the importance of having a robust and customized CMS. That’s why we run all of our client projects out of a single, enormous Joomla instance.
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
