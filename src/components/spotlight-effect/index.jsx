import { useEffect, useRef } from "react";

export const Spotlight = () => {
  const cardsContainer = useRef(null);

  const applyOverlayMask = (e) => {
    if (!cardsContainer.current) {
      return;
    }

    const x = e.pageX - cardsContainer.current.offsetLeft;
    const y = e.pageY - cardsContainer.current.offsetTop;

    cardsContainer.current.setAttribute(
      "style",
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", (e) => {
      applyOverlayMask(e);
    });

    return () => {
      document.body.removeEventListener("pointermove", (e) => {
        applyOverlayMask(e);
      });
    };
  }, []);

  return (
    <>
      <main className="max-w-[1000px] p-14">
        <h1 className="text-center mb-5 text-2xl">Pricing</h1>
        <div className="relative" ref={cardsContainer}>
          <div className="flex flex-wrap gap-16">
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#212121] hover:bg-[#303030] w-[320px] h-[400px]"></div>

            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#212121] hover:bg-[#303030] w-[320px] h-[400px]"></div>

            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#212121] hover:bg-[#303030] w-[320px] h-[400px]"></div>
          </div>

          {/* twin cards */}
          <div
            className="flex flex-wrap gap-16 select-none pointer-events-none absolute inset-0"
            style={{
              opacity: "var(--opacity, 0)",
              mask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
              WebkitMask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
            }}
          >
            {/* card */}
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#3cffce] border border-solid rounded-xl transition-colors bg-[#217661] text-transparent"></div>

            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#3cffce] border border-solid rounded-xl transition-colors bg-[#217661] text-transparent"></div>

            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#3cffce] border border-solid rounded-xl transition-colors bg-[#217661] text-transparent"></div>
          </div>
        </div>
      </main>
    </>
  );
};
