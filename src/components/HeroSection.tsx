import photoEllesse from "@/assets/photo-ellesse.jpeg";
import photoStreet from "@/assets/photo-street.jpeg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-charcoal flex flex-col overflow-hidden"
    >
      {/* Background image layer */}
      <div className="absolute inset-0">
        <img
          src={photoEllesse}
          alt="Sinethemba Nguta - hero"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end flex-1 px-6 md:px-16 pb-16 md:pb-24 max-w-7xl mx-auto w-full">
        <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <p className="font-body text-xs tracking-[0.35em] uppercase text-terracotta mb-6">
            Khayelitsha · Cape Town · Johannesburg
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-black text-cream leading-none tracking-tight mb-4">
            Sine-
            <br />
            <span className="italic font-normal text-terracotta/90">themba</span>
            <br />
            Nguta
          </h1>
          <div className="w-16 h-px bg-terracotta mt-6 mb-6" />
          <p className="font-body text-sm md:text-base tracking-[0.2em] uppercase text-cream/60 mb-4">
            Model · Cultural Thinker · Creative
          </p>
          <p className="font-body text-base md:text-lg text-cream/50 max-w-md font-light leading-relaxed">
            Telling stories through movement, fabric, and identity — from township streets to the lens.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s", opacity: 0 }}>
          <span className="font-body text-xs tracking-[0.2em] uppercase text-cream/30 rotate-90 mb-4">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </div>

      {/* Side accent image — desktop */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[38vw] overflow-hidden">
        <img
          src={photoStreet}
          alt="Sinethemba Nguta street fashion"
          className="w-full h-full object-cover object-top opacity-70"
          style={{ filter: "grayscale(20%) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
