

export default function Body({children}) {
  return (
    <div className="relative flex flex-auto overflow-hidden bg-white pt-14">
      <div className="relative isolate flex w-full flex-col pt-9">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5"
          maskImage="linear-gradient(to_bottom_left, white 40%, transparent 50%)"
        >
          <rect width="100%" height="100%" fill="url(#:R1lda:)" strokeWidth="0"></rect>
          <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
            {/* SVG paths */}
          </svg>
        </svg>
        {
            children
        }
        
      </div>
    </div>
  );
}

