import React from "react";

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
                    src="/_next/static/media/logomark-dark.4d2947be.svg"
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
                Skip the bank, borrow from those you trust
              </p>
              <p className="mt-4 text-base text-neutral-600">
                FamilyFund is a crowdfunding platform for friends and family.
                Allowing users to take personal loans from their network
                without a traditional financial institution.
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
                    src="/_next/static/media/logomark-dark.73187f97.svg"
                  />
                </a>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <time datetime="2022" className="font-semibold">
                  2022
                </time>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>Case study</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Get a hodl of your health
              </p>
              <p className="mt-4 text-base text-neutral-600">
                Unseal is the first NFT platform where users can mint and trade
                NFTs of their own personal health records, allowing them to
                take control of their data.
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
                    src="/_next/static/media/logomark-dark.00d7d7b3.svg"
                  />
                </a>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <time datetime="2022" className="font-semibold">
                  2022
                </time>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>Case study</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Overcome your fears, find your match
              </p>
              <p className="mt-4 text-base text-neutral-600">
                Find love in the face of fear — Phobia is a dating app that
                matches users based on their mutual phobias so they can be
                scared together.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
