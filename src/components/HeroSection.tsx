import photoStreet from "@/assets/photo-street.jpeg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-charcoal flex flex-col overflow-hidden"
    >
      {/* Single full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={photoStreet}
          alt="Snizzy"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />
        {/* Gradient on the RIGHT side to back the text */}
        <div className="absolute inset-0 bg-gradient-to-l from-charcoal/90 via-charcoal/40 to-transparent" />
      </div>

      {/* Content — pinned to bottom-right */}
      <div className="relative z-10 flex flex-col justify-end flex-1 pb-16 md:pb-24 w-full">
        <div
          className="ml-auto px-6 md:px-16 max-w-lg animate-fade-up text-right"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-terracotta mb-6">
            · Cape Town · Johannesburg
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-black text-cream leading-none tracking-tight mb-4">
            Snizzy
          </h1>
          <div className="w-16 h-px bg-terracotta mt-6 mb-6 ml-auto" />
          <p className="font-body text-sm md:text-base tracking-[0.2em] uppercase text-cream/60 mb-4">
            Model · Cultural Thinker · Creative
          </p>
          <p className="font-body text-base md:text-lg text-cream/50 max-w-md font-light leading-relaxed">
            Telling stories through movement, fabric, and identity — from township streets to the lens.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-8 md:left-16 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1.2s", opacity: 0 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-cream/30 to-transparent" />
        <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/30 rotate-90 mt-4">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
