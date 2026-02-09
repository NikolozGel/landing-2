export function BackgroundEffects() {
  return (
    <>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#1a2332]/50 to-[#1a2332]" />

      {/* Blur Circles */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-[#00ab7f] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-[#f5ca6f] rounded-full blur-[120px] opacity-10" />
    </>
  );
}
