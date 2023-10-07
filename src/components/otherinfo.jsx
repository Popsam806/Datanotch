

export default function OtherInfo() {
  return (
    <>
      <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
              <div>
                <h2 className="font-display text-base font-semibold text-white">Our offices</h2>
                <ul role="list" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <li key="copenhagen">
                    <p className="text-sm not-italic text-neutral-300">
                      <strong className="text-white">Copenhagen</strong><br />
                      1 Carlsberg Gate<br />
                      1260, København, Denmark
                    </p>
                  </li>
                  <li key="billund">
                    <p className="text-sm not-italic text-neutral-300">
                      <strong className="text-white">Billund</strong><br />
                      24 Lego Allé<br />
                      7190, Billund, Denmark
                    </p>
                  </li>
                </ul>
              </div>
              <div className="sm:border-l sm:border-transparent sm:pl-16">
                <h2 className="font-display text-base font-semibold text-white">Follow us</h2>
                <ul role="list" className="flex gap-x-10 text-white mt-6">
                  <li key="facebook">
                    <a
                      aria-label="Facebook"
                      className="transition hover:text-neutral-200"
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        {/* Facebook icon path */}
                      </svg>
                    </a>
                  </li>
                  <li key="instagram">
                    <a
                      aria-label="Instagram"
                      className="transition hover:text-neutral-200"
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        {/* Instagram icon path */}
                      </svg>
                    </a>
                  </li>
                  <li key="twitter">
                    <a
                      aria-label="Twitter"
                      className="transition hover:text-neutral-200"
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        {/* Twitter icon path */}
                      </svg>
                    </a>
                  </li>
                  <li key="github">
                    <a
                      aria-label="GitHub"
                      className="transition hover:text-neutral-200"
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        {/* GitHub icon path */}
                      </svg>
                    </a>
                  </li>
                  <li key="dribbble">
                    <a
                      aria-label="Dribbble"
                      className="transition hover:text-neutral-200"
                      href="https://dribbble.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        {/* Dribbble icon path */}
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
